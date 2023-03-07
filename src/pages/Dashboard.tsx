import { DataCard, AccountLayout } from '../components';
import { women } from '../images';


function Dashboard() {
    var __headingsContent = 'Accelerate your quest, learn anywhere, anytime';
    var __paragraphs = 'Acquire new knowledge and skills, train for certification diplomas and degrees from world-class instituitions at your own pace and space.';
    return (
        <AccountLayout>
        <DataCard userIcon={women} headingsContent={__headingsContent} paragraphs={__paragraphs} />    
        </AccountLayout>
    );
}

export default Dashboard;
