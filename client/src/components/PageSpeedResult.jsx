import { useState } from "react";
export default function PageSpeedResult({ allData }) {
    const [tab, setTab] = useState('mobile');
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
                            Tab DeskTop
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
