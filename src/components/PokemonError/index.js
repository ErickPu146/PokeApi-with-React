import { Alert } from "react-bootstrap"

const PokemonError = () => {
    console.log("Me tengo que renderizar")
    return (
        <>
            <tr className="text-center">
                <td colSpan={12}>
                    <Alert variant="danger">
                        Lamentamente, no encontramos informacion
                    </Alert>
                </td>
            </tr>
        </>
    )
}

export { PokemonError }