import React from 'react'

export const InsertCode = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const login = (data) => {
        console.log(data);
        dispatch(loginWithCode(data.code));
    }
    return (
        <main>
            <h1>Ingrese su código de verificación</h1>

            <form onSubmit={handleSubmit(login)}>
                <label>Código de verificación:</label>
                <input
                    type="text"
                    placeholder="Ingrese su código"
                    {...register("code")}
                />
                <button type="submit">
                    Confirmar código
                </button>
            </form>
        </main>
    )
}
