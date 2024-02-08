import { getYear } from '../utilities/toolbelt';

function Footer ({copyright = getYear() ,author}) {
    return (
        <footer>
            <p>VMDB &copy; {copyright} {author}</p>
        </footer>
    );
}

export default Footer;