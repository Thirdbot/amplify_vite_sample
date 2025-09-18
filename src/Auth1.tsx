import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
export default function Auth1() {

    return <div>
        <Authenticator signUpAttributes={[
            'nickname'
        ]}>
            {({ signOut }) => (
                <main>
                    <button onClick={signOut}>Sign Out</button>
                </main>
            )}
        </Authenticator>
    </div>
}