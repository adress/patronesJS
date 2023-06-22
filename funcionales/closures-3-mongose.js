//una varibale con propiedades por defecto
const auditProps = {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedAt: { type: Schema.Types.ObjectId, ref: 'User' },
};

//funciona basicasimamente como un proxy para crear un modelo
// remplaza las props que se pasan por parametro por las props por defecto
const Model = defaultProps => {
    return (name, props) => {
        const schema = mongoose.Schema({
            ...defaultProps,
            ...props,
        });
        return mongoose.model(name, schema);
    }
}

export const withAudit = Model(auditProps);


//... en otro archivo

withAudit('Producto', {
    name: String,
    desc: String,
});