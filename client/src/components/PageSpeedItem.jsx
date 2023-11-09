import { useState } from "react";
export default function PageSpeedItem({ allData }) {
    const [tab, setTab] = useState('mobile');
    const passedAudits = Object.keys(allData)
        .filter(key => allData[key].score === 1)
        .reduce((result, key) => {
            result[key] = allData[key];
            return result;
        }, {});
    console.log(">>>>passedAudits", passedAudits);
    return (
        <>
            <div>
                <div className="tab d-flex justify-content-center align-items-center mb-3">
                    <button
                        onClick={(e) => setTab('mobile')}
                        className={`btn me-2 ${tab === 'mobile' ? 'btn-info' : 'btn-secondary'}`} >
                        <i className="bx bx-mobile ms-1"></i> Mobile
                    </button>
                    <button
                        onClick={(e) => setTab('desktop')}
                        className={`btn ms-2 ${tab === 'desktop' ? 'btn-info' : 'btn-secondary'}`} >
                        <i className="bx bx-desktop ms-1"></i> Desktop
                    </button>
                </div>
                <div className="all-tab">
                    {tab === 'mobile' &&
                        <div className="tab-mobile">
                            <div className="passed-audits">
                                <div className="d-flex justify-content-between align-items-center passed-audits-heading">
                                    <h6>PASSED AUDITS</h6>
                                    <button>Show</button>
                                </div>
                                <div className="passed-audits-content">
                                    <ul className="passed-audits-list">
                                        {Object.keys(passedAudits).map((key) => {
                                            const detail = passedAudits[key] ?? {};
                                            return (
                                                <li className="passed-audits-item">
                                                    <div className="icon">
                                                        <span></span>
                                                    </div>
                                                    <div className="passed-audits-item-info">
                                                        <div className="passed-audits-item-title">
                                                            <div className="passed-audits-item-heading" dangerouslySetInnerHTML={{ __html: detail.title }}></div>
                                                            <div className="passed-audits-item-value" dangerouslySetInnerHTML={{ __html: detail.displayValue }}></div>
                                                        </div>
                                                        <div className="passed-audits-item-desc" dangerouslySetInnerHTML={{ __html: detail.description }}></div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {tab === 'desktop' &&
                        <div className="tab-desktop">
                            Tab Desktop
                        </div>
                    }
                </div>
            </div></>
    )
}
