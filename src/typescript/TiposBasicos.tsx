

export const TiposBasicos = () => {

    const nombre: string = 'Catedral';
    const edad: number = 21;
    const estaActivo:boolean = true;

    const poderes: (string|number)[] = []; // 'Velocidad','Volar','Respirar en el agua'
    
    return (
        <>
            <h3>Tipos básicos</h3>
            { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
            <br/>
            { poderes.join(', ') }
        </>
    )
}
