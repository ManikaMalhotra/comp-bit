import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

const ButtonPage = () => {
    return (
        <div>
            <div>
                <Button primary rounded>
                    <GoBell />
                    Click here
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    <GoCloudDownload />
                    Buy now
                </Button>
            </div>
            <div>
                <Button success outline>
                    <GoDatabase />
                    See deal
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    Hide Ads
                </Button>
            </div>
            <div>
                <Button danger outline rounded>
                    <GoCloudDownload />
                    Something
                </Button>
            </div>
        </div>
    );
};

export default ButtonPage;