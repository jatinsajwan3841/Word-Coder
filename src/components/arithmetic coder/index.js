import Paper from '@material-ui/core/Paper'

export default function ArithmeticCoder({ code, prob }) {
    var inp = code
    var inplen = inp.length
    var result = []

    var count = {}
    ;[...inp].forEach((s) => (count[s] ? count[s]++ : (count[s] = 1)))

    var probs = count

    if (prob == null) {
        for (let key in probs) {
            probs[key] = probs[key] / inplen
        }
    } else probs = Object.fromEntries(Object.entries(prob).sort())

    //console.log(probs)
    var fineinp = Object.keys(probs)
    var tmp = Object.values(probs)
    var basepairs = [0]
    for (let i = 0; i < tmp.length - 1; i++) {
        basepairs.push(+(tmp[i] + basepairs[i]).toFixed(10))
    }
    basepairs.push(1)
    result.push(basepairs)
    //console.log(basepairs);

    var np = basepairs
    for (let v of inp) {
        var t = []
        var ind = fineinp.indexOf(v)
        var min = np[ind]
        var max = np[ind + 1]

        t.push(min)
        var d = max - min
        for (let i = 0; i < fineinp.length - 1; i++)
            t.push(+(d * probs[fineinp[i]] + t[i]).toFixed(10))
        t.push(max)
        np = t
        result.push(t)
        //console.log(t);
    }
    //result.push((np[0] + np[np.length - 1]) / 2);
    //console.log((np[0] + np[np.length - 1]) / 2);

    const display = () => {
        return result.map((value, index) => {
            return (
                <li
                    key={index}
                    style={{
                        width: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        margin: '0.9rem',
                    }}
                >
                    Iteration {index + 1}
                    {value.map((val) => (
                        <span key={Math.random()}>{val}</span>
                    ))}
                </li>
            )
        })
    }

    return (
        <>
            <Paper elevation={3}>
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                    }}
                >
                    <li>
                        {[...fineinp].map((c, i) => (
                            <span
                                key={i}
                                style={{
                                    width: '5px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexWrap: 'wrap',
                                    margin: '0.9rem',
                                }}
                            >
                                {c}
                            </span>
                        ))}
                    </li>
                    {display()}
                </ul>
            </Paper>
            Final Result: {(np[0] + np[np.length - 1]) / 2}
        </>
    )
}
