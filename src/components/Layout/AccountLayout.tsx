import { PropsWithChildren } from 'react';
import Header from '../Header';



const AccountLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="container-fluid">
            <Header />        
            {children}
        </div>
    );
};

export default AccountLayout;
