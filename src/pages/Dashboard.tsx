import { DataCard, Card, Categories, AccountLayout } from '../components';
import { women } from '../images';


function Dashboard() {
    var __headingsContent = 'Accelerate your quest, learn anywhere, anytime';
    var __paragraphs = 'Acquire new knowledge and skills, train for certification diplomas and degrees from world-class instituitions at your own pace and space.';
    return (
        <AccountLayout>
        <DataCard userIcon={women} headingsContent={__headingsContent} paragraphs={__paragraphs} />  
        <section className='online_n'>
        <div className='container'>
            <div className='row'>
              <div className='title_holding'>
                <h3 className='floating_left'>Featured Courses</h3>
                <a className='btn btn_stying floating_right'>See all courses</a>
              </div>
              <Card />
             
            </div>
            </div>
            <br></br>
            <div className='container'>
            <div className='row'>
              <div className='title_holding'>
                <h3 className='floating_left'> Categories</h3>
                <a className='btn btn_stying floating_right'></a>
              </div>
              <Categories />
             
            </div>
            </div>
            </section> 

        </AccountLayout>
    );
}

export default Dashboard;
