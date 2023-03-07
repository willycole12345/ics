import { PropsWithChildren } from 'react';

type Props = {
    userIcon: string;
    headingsContent: string;
    paragraphs: string;
} & PropsWithChildren;

function DataCard({ userIcon, headingsContent, paragraphs }: Props) {
    return (
        <div className='online_new'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img className="dashboard_placement" src={userIcon} alt="logo" />
                </div>
                <div className="col-md-6">
                    <span>
                        <h3 className="dashboardcard_text_icon">{headingsContent}</h3>
                    </span>
                    <h4 className='dashboard_count text-start paragraph_text'>
                        <span className=' '>{paragraphs}</span>
                    </h4>
                    <div className='bttt_placement'>
                    <div className="nav__item_btt nav__button_white nav__button_white--brand">
                        <a><span>Log In </span>
                        </a>
                        </div>
                    <div className="nav__item_btt nav__button nav__button--brand"><a  className=""><span>Sign Up</span></a></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default DataCard;
