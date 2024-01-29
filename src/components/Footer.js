import { getYear } from '../utilities/toolbelt';

function Footer ({copyright = getYear() ,author = 'Me'}) {
    return (
        <footer>
            <p>Copyright &copy; {copyright} {author}</p>
        </footer>
    );
}

export default Footer;