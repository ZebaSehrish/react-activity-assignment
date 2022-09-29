import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css';

function App() {
    const notify = () => toast("Activity completed");

    return (
        <div className='toast' >
            <button onClick={notify} className='btn-completion'>Complete Activity</button>
            <ToastContainer />
        </div>
    );
}

export { App };