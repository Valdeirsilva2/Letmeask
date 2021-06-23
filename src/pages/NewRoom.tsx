import {Link} from 'react-router-dom';
import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
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
                    <h2>Criar uma nova sala</h2>
                </div>
                <form action="">
                    <input 
                        type="text" 
                        placeholder="Digite o código da sala"
                    />
                    <Button type="submit">
                        Criar Sala
                    </Button>
                </form>
                   <p>
                       Quer entrar em uma sala já existente? <Link to="/"> Clique aqui</Link>
                    </p>
            </main>
        </div>
    )
}