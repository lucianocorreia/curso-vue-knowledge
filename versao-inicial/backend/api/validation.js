/**
 * Verificar se o objeto existe
 *
 * @param {*} value
 * @param {*} msg
 */
function existsOrError(value, msg) {
    if (!value) throw msg
    if (Array.isArray(value) && value.length === 0) throw msg
    if (typeof value === 'string' && !value.trim()) throw msg
}

/**
 * Verifica se o objeto nao existe
 *
 * @param {*} value
 * @param {*} msg
 */
function notExistsOrErrror(value, msg) {
    try {
        existsOrError(value, msg)
    } catch (msg) {
        return
    }
    throw msg
}

/**
 * Verificar se A = B
 *
 * @param {*} valueA
 * @param {*} valueB
 * @param {*} msg
 */
function equalsOrError(valueA, valueB, msg) {
    if (valueA !== valueB) throw msg
}

return {
    existsOrError,
    notExistsOrErrror,
    equalsOrError
}