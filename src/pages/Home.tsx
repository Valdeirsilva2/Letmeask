import {useHistory} from 'react-router-dom';
import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { auth, firebase } from '../services/firebase';

export function Home() {
    const history = useHistory();

    function handleCreateRoom() {

        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
            
        });
        // history.push('/rooms/new');
    }
    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="ilustration" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="content-logo">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="google icon" />
                        Crie sua sala com o Google
                    </button>
                        <p>ou entre em uma sala</p>
                </div>
                <form action="">
                    <input 
                        type="text" 
                        placeholder="Digite o código da sala"
                    />
                    <Button type="submit">
                        Entrar na Sala
                    </Button>
                </form>
            </main>
        </div>
    )
}