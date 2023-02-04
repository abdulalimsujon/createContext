import { useUser } from "../Contex/user";

;

const Activity = () => {

    const [user, setUser] = useUser();





    return (
        <div>
            <h1>I  am from activity</h1>
            {
                setUser('sujon')
            }

            <pre>
                {
                    JSON.stringify(user, null, 4)

                }

            </pre>


        </div>
    );
};

export default Activity;