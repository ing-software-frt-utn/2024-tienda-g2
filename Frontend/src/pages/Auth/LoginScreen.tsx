import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginLinks } from '../../components/Links/LoginLinks';
import { ShowPassword } from '../../components/UI/ShowPassword';
import { SeparatorWithoutText } from '../../components/UI/Separator';
import { TextInput } from '../../components/Inputs/TextInput';
import { ActionButton } from '../../components/Buttons/ActionButton';
// import { TitleForForms } from '../../components/LoginComponents/TitleForForms';
// import { useDispatch } from 'react-redux';
// import { getAuthentication } from '../../redux/slices/auth/thunks';
// import { useNavigate } from 'react-router-dom';

type FormValues = {
    email: string;
    password: string;
};

export const LoginScreen = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        const dataToSend = { correo: data.email, password: data.password };
        console.log(dataToSend);
        // dispatch(getAuthentication(dataToSend, navigate));
    };

    return (
        <section className="bg-gray-900 flex min-h-screen">
            <div className="m-auto">
                <div className="bg-gray-700 px-12 py-16 rounded-xl text-white max-w-xl w-screen">
                    <div className="mb-10">
                        <h1 className="text-4xl text-center">
                            Bienvenido a <span className={`text-orange-400 italic`}>LaTienda</span>
                        </h1>
                        <h2 className="text-2xl text-center mt-3">
                            Ingresa las credenciales de tu licencia
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            inputName={'email'}
                            inputType={'email'}
                            placeholder={'Correo Electronico'}
                            keyPressEvent={() => {}}
                            registerForm={{
                                ...register('email', { required: true, pattern: /^\S+@\S+$/i }),
                            }}
                            // customClassName={'mt-10'}
                        />

                        <div className="py-2 mt-5">
                            <div className="relative">
                                <TextInput
                                    inputName={'password'}
                                    inputType={!showPassword ? 'password' : 'text'}
                                    placeholder={'Contraseña'}
                                    keyPressEvent={() => {}}
                                    registerForm={{
                                        ...register('password', { required: true, maxLength: 15 }),
                                    }}
                                />

                                <ShowPassword
                                    setShowPassword={setShowPassword}
                                    showPassword={showPassword}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            {/* <label>
                                <input type="checkbox" className="rounded-lg" />
                                <span className="py-2 text-lg white leading-snug"> Recordarme </span>
                            </label> */}

                            <LoginLinks
                                title={'Olvidaste tu contraseña?'}
                                url={'/auth/reset-password'}
                                idType={1}
                            />
                        </div>

                        <div className="flex justify-center mt-6">
                            <ActionButton
                                title="Iniciar Sesion"
                                type="submit"
                                customClass="bg-gray-900 ml-3 hover:bg-indigo-400 hover:text-gray-900"
                            />
                        </div>
                    </form>

                    <div className="mt-10">
                        <SeparatorWithoutText color={'border-blue-400'} />
                    </div>

                    <LoginLinks
                        title={'No tienes una cuenta? Registrate'}
                        url={'/auth/register'}
                        className={'mt-7'}
                        idType={0}
                    />
                    <LoginLinks title={'Necesitas Ayuda?'} url={'/auth/help-page'} idType={0} />
                </div>
            </div>
        </section>
    );
};
