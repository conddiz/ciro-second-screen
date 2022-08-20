const TEL_MASK = (value) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{1})(\d)/, '($1$2) ')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
}

const CEP_MASK = (value) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
}

export const phoneMask = (v) => {
    v = v.replace(/\D/g, '')
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2')
    v = v.replace(/(\d)(\d{4})$/, '$1-$2')
    return v
}

export { TEL_MASK, CEP_MASK }
