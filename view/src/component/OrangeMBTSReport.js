import React, {useEffect, useState} from 'react';

const OrangeMBTSReport = () => {

    const [technicianName, setTechnicianName] = useState("Van Den Ostende Anthony");
    const [reportDate, setReportDate] = useState(new Date());
    const [siteName, setSiteName] = useState("");
    const [iandcissue, setIandcissue] = useState("No");
    const [intrusion, setIntrusion] = useState(null);
    const [fire, setFire] = useState(null);
    const [ml, setMl] = useState(null);
    const [water, setWater] = useState(null);
    const [minorPsu, setMinorPsu] = useState(null);
    const [majorPsu, setMajorPsu] = useState(null);
    const [MPF, setMPF] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [internalGenerator, setInternalGenerator] = useState(null);
    const [externalGenerator, setExternalGenerator] = useState(null);
    const [wind, setWind] = useState(null);
    const [batteryNumber, setBatteryNumber] = useState(null);

    

    const fillTechnicianName = (e) => {
        setTechnicianName(e.target.value);
    }

    const fillReportDate = (e) =>{
        setReportDate(e.target.value);
    }

    const fillSiteName = (e) => {
        setSiteName(e.target.value);
    }

    const fillIandCissue = (e) => {
        setIandcissue(e.target.value);
    }

    const fillIntrusion = (e) => {

    }

    const fillFire = (e) => {
        
    }

    const fillMl = (e) => {
        
    }

    const fillWater = (e) => {
        
    }

    const fillMinor = (e) => {
        
    }

    const fillMajor = (e) => {
        
    }

    const fillMPF = (e) => {
        
    }

    const fillTemperature = (e) => {
        
    }

    const fillInternalGenerator = (e) => {
        
    }

    const fillExternalGenerator = (e) => {
        
    }

    const fillWind = (e) => {
        
    }

    const fillBatteryNumber = (e) => {
        
    }






    const copyToClipBoard = (e) => {
        const text = e.target.parentNode.querySelector("p").innerText;

        const textToCopy = document.createElement('input');
        document.body.appendChild(textToCopy);
        textToCopy.value = text;
        textToCopy.select();
        document.execCommand("copy");
        textToCopy.remove();

        // creat a div to alert the person that the element has been copied !
        const tempWindow = document.createElement("div");
        e.target.appendChild(tempWindow);
        tempWindow.className = "tempWindow";
        tempWindow.textContent = "Copied !"
        setTimeout(()=> {
            tempWindow.remove();
        }, 1000)


    }

    useEffect(()=>{

    }, [])





    return (
        <div className="holidayRequest">

            <h2 className="holidayRequest__title">MBTS report generator</h2>

            <div className="holidayRequest__container">

                <div className="form">

                <form action="" method="post">

                    <h4>General</h4>

                    <div className="name form__label">
                        <label htmlFor="technicianName">Enter your name</label>
                        <input type="text" name="technicianName" id="technicianName" onChange={fillTechnicianName} placeholder={technicianName} />
                    </div>

                    <div className=" form__label">
                        <label htmlFor="reportDate">Enter report date</label>
                        <input type="date" name="reportDate" id="reportDate" value={reportDate} onChange={fillReportDate} />
                    </div>

                    <div className=" form__label">
                        <label htmlFor="siteName">Enter site name</label>
                        <input type="text" name="siteName" id="siteName" onChange={fillSiteName} />

                    </div>

                    <div className=" form__label">
                        <label htmlFor="IandCissue">Issue during I and C ?</label>
                        <input type="text" name="IandCissue" id="IandCissue" value={fillIandCissue} />

                    </div>

                    <h4>External alarms:</h4>

                    <div className=" form__label radio__label">
                        <p>Intrusion</p>
                        <div className="radio__label__check">
                        <label htmlFor="intrusionYes">Yes</label>
                        <input type="radio" name="intrusion" id="intrusionYes" value="yes"/>
                        <label htmlFor="intrusionNo">No</label>
                        <input type="radio" name="intrusion" id="intrusionNo" value="no" />
                        </div>
                        
                    </div>

                    <div className=" form__label radio__label">
                        <p>Fire</p>
                        <div className="radio__label__check">
                        <label htmlFor="fireYes">Yes</label>
                        <input type="radio" name="fire" id="fireYes" value="yes" />
                        <label htmlFor="fireNo">No</label>
                        <input type="radio" name="fire" id="fireNo" value="no" />
                        </div>
                        
                    </div>

                    <div className=" form__label radio__label">
                        <p>Mast Light</p>
                        <div className="radio__label__check">
                        <label htmlFor="mlYes">Yes</label>
                        <input type="radio" name="ml" id="mlYes" value="yes" />
                        <label htmlFor="mlNo">No</label>
                        <input type="radio" name="ml" id="mlNo" value="no" />
                        </div>
                    </div>

                    <div className=" form__label radio__label">
                        <p>Water</p>
                        <div className="radio__label__check">
                        <label htmlFor="waterYes">Yes</label>
                        <input type="radio" name="water" id="waterYes" value="yes" />
                        <label htmlFor="waterNo">No</label>
                        <input type="radio" name="water" id="waterNo" value="no" />
                        </div>
                        
                    </div>

                    <div className=" form__label radio__label">
                        <p>Minor Psu</p>
                        <div className="radio__label__check">
                        <label htmlFor="minorYes">Yes</label>
                        <input type="radio" name="minor" id="minorYes" value="yes" />
                        <label htmlFor="minorNo">No</label>
                        <input type="radio" name="minor" id="minorNo" value="no" />
                        </div>
                        
                    </div>

                    <div className=" form__label radio__label">
                        <p>Major Psu</p>
                        <div className="radio__label__check">
                        <label htmlFor="majorYes">Yes</label>
                        <input type="radio" name="major" id="majorYes" value="yes" />
                        <label htmlFor="majorNo">No</label>
                        <input type="radio" name="major" id="majorNo" value="no" />
                        </div>
                        
                    </div>

                    <div className=" form__label radio__label">
                        <p>Main power faillure</p>
                        <div className="radio__label__check">
                        <label htmlFor="mpfYes">Yes</label>
                        <input type="radio" name="mpf" id="mpfYes" value="yes" />
                        <label htmlFor="mpfNo">No</label>
                        <input type="radio" name="mpf" id="mpfNo" value="no" />
                        </div>
                        
                    </div>

                    <div className=" form__label radio__label">
                        <p>Temperature</p>
                        <div className="radio__label__check">
                        <label htmlFor="temperatureYes">Yes</label>
                        <input type="radio" name="temperature" id="temperatureYes" value="yes" />
                        <label htmlFor="temperatureNo">No</label>
                        <input type="radio" name="temperature" id="temperatureNo" value="no" />
                        </div>
                        
                    </div>

                    <h4>Supplement external alarm</h4>

                    <div className=" form__label radio__label">
                        <p>Internal generator</p>
                        <div className="radio__label__check">
                        <label htmlFor="igYes">Yes</label>
                        <input type="radio" name="ig" id="igYes" value="yes" />
                        <label htmlFor="igNo">No</label>
                        <input type="radio" name="ig" id="igNo" value="no" />
                        </div>
                        
                    </div>

                    <div className=" form__label radio__label">
                        <p>External generator</p>
                        <div className="radio__label__check">
                        <label htmlFor="egYes">Yes</label>
                        <input type="radio" name="eg" id="egYes" value="yes" />
                        <label htmlFor="egNo">No</label>
                        <input type="radio" name="eg" id="egNo" value="no" />
                        </div>
                        
                    </div>

                    <div className=" form__label radio__label">
                        <p>Wind</p>
                        <div className="radio__label__check">
                        <label htmlFor="windYes">Yes</label>
                        <input type="radio" name="wind" id="windYes" value="yes" />
                        <label htmlFor="windNo">No</label>
                        <input type="radio" name="wind" id="windNo" value="no" />
                        </div>
                        
                    </div>

                    <h4>Batteries</h4>

                    <div className=" form__label radio__label">
                        <label htmlFor="batteryNumber">Number of battery string present</label>
                        <input type="number" name="batteryNumber" id="batteryNumber" />
                    </div>

                    <div id="batteryNumberElement">

                    </div>

                    


                    

                   





                </form>

            </div>

                <div className="form__view">

                

                <div className="form__view__object">
                <h4>Object</h4>
                <p>

                   
                    


                </p>
                <button 
                className="copy__btn"
                onClick={(e)=>copyToClipBoard(e)}
                >Copy to clipboard</button>

                 

                </div>

                

                <div className="form__view__body" >
                <h4>Body</h4>
                <p>
                    




                </p>
                <button 
                className="copy__btn"
                onClick={(e)=>copyToClipBoard(e)}
                >
                
                Copy to clipboard</button>
                

                </div>

                </div>

            </div>

            
            
        </div>
    );
};

export default OrangeMBTSReport;