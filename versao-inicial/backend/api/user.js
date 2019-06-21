module.exports = app => {
    const save = (rea, res) => {
        res.send('user save')
    }

    return {
        save
    }
}