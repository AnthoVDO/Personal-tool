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

                    <div className="batteryString">
                        <h5>Battery string 1</h5>
                        <div className="voltageOnRectifier">
                            <label htmlFor="rectifierV1">Voltage on rectifier</label>
                            <input type="number" name="rectifierV1" id="rectifierV1" />
                        </div>
                        <div className="currentOnRectifier">
                            <label htmlFor="rectifierC1">Current on rectifier</label>
                            <input type="number" name="rectifierC1" id="recitifierC1" />
                        </div>
                        <div className="voltageOnBattery">
                            <label htmlFor="batteryV1">Voltage on battery</label>
                            <input type="number" name="batteryV1" id="batteryV1" />
                        </div>
                        <div className="currentOnBattery">
                            <label htmlFor="batteryC1">Current on battery</label>
                            <input type="number" name="batteryC1" id="batteryC1" />
                        </div>
                        <div className="batteryTighted">
                            <p>Batteries tighted</p>
                            <label htmlFor="batteryTightedYes1">Yes</label>
                            <input type="radio" name="batteryTighted1" id="batteryTightedYes1" />
                            <label htmlFor="batteryTightedNo1">No</label>
                            <input type="radio" name="batteryTighted1" id="batteryTightedNo1" />
                        </div>
                        <div className="batteryReplacement">
                            <p>Batteries need to be replaced ?</p>
                            <label htmlFor="batteryReplacementYes1">Yes</label>
                            <input type="radio" name="batteryReplacement1" id="batteryReplacementYes1" />
                            <label htmlFor="batteryReplacementNo1">No</label>
                            <input type="radio" name="batteryReplacement1" id="batteryReplacementNo1" />
                        </div>
                        <div className="batteryRemark">
                            <label htmlFor="remark1">Remark</label>
                            <input type="text" name="remark1" id="remark1" />
                        </div>
                    </div>

                    <div className="batteryString">
                        <h5>Battery string 2</h5>
                        <div className="voltageOnRectifier">
                            <label htmlFor="rectifierV2">Voltage on rectifier</label>
                            <input type="number" name="rectifierV2" id="rectifierV2" />
                        </div>
                        <div className="currentOnRectifier">
                            <label htmlFor="rectifierC2">Current on rectifier</label>
                            <input type="number" name="rectifierC2" id="recitifierC2" />
                        </div>
                        <div className="voltageOnBattery">
                            <label htmlFor="batteryV2">Voltage on battery</label>
                            <input type="number" name="batteryV2" id="batteryV2" />
                        </div>
                        <div className="currentOnBattery">
                            <label htmlFor="batteryC2">Current on battery</label>
                            <input type="number" name="batteryC2" id="batteryC2" />
                        </div>
                        <div className="batteryTighted">
                            <p>Batteries tighted</p>
                            <label htmlFor="batteryTightedYes2">Yes</label>
                            <input type="radio" name="batteryTighted2" id="batteryTightedYes2" />
                            <label htmlFor="batteryTightedNo2">No</label>
                            <input type="radio" name="batteryTighted2" id="batteryTightedNo2" />
                        </div>
                        <div className="batteryReplacement">
                            <p>Batteries need to be replaced ?</p>
                            <label htmlFor="batteryReplacementYes2">Yes</label>
                            <input type="radio" name="batteryReplacement2" id="batteryReplacementYes2" />
                            <label htmlFor="batteryReplacementNo2">No</label>
                            <input type="radio" name="batteryReplacement2" id="batteryReplacementNo2" />
                        </div>
                        <div className="batteryRemark2">
                            <label htmlFor="remark2">Remark</label>
                            <input type="text" name="remark2" id="remark2" />
                        </div>
                    </div>

                    <div className="batteryString">
                        <h5>Battery string 3</h5>
                        <div className="voltageOnRectifier">
                            <label htmlFor="rectifierV3">Voltage on rectifier</label>
                            <input type="number" name="rectifierV3" id="rectifierV3" />
                        </div>
                        <div className="currentOnRectifier">
                            <label htmlFor="rectifierC3">Current on rectifier</label>
                            <input type="number" name="rectifierC3" id="recitifierC3" />
                        </div>
                        <div className="voltageOnBattery">
                            <label htmlFor="batteryV3">Voltage on battery</label>
                            <input type="number" name="batteryV3" id="batteryV3" />
                        </div>
                        <div className="currentOnBattery">
                            <label htmlFor="batteryC3">Current on battery</label>
                            <input type="number" name="batteryC3" id="batteryC3" />
                        </div>
                        <div className="batteryTighted">
                            <p>Batteries tighted</p>
                            <label htmlFor="batteryTightedYes3">Yes</label>
                            <input type="radio" name="batteryTighted3" id="batteryTightedYes3" />
                            <label htmlFor="batteryTightedNo3">No</label>
                            <input type="radio" name="batteryTighted3" id="batteryTightedNo3" />
                        </div>
                        <div className="batteryReplacement">
                            <p>Batteries need to be replaced ?</p>
                            <label htmlFor="batteryReplacementYes3">Yes</label>
                            <input type="radio" name="batteryReplacement3" id="batteryReplacementYes3" />
                            <label htmlFor="batteryReplacementNo3">No</label>
                            <input type="radio" name="batteryReplacement3" id="batteryReplacementNo3" />
                        </div>
                        <div className="batteryRemark">
                            <label htmlFor="remark3">Remark</label>
                            <input type="text" name="remark3" id="remark3" />
                        </div>
                    </div>

                    <div className="batteryString">
                        <h5>Battery string 4</h5>
                        <div className="voltageOnRectifier">
                            <label htmlFor="rectifierV4">Voltage on rectifier</label>
                            <input type="number" name="rectifierV4" id="rectifierV4" />
                        </div>
                        <div className="currentOnRectifier">
                            <label htmlFor="rectifierC4">Current on rectifier</label>
                            <input type="number" name="rectifierC4" id="recitifierC4" />
                        </div>
                        <div className="voltageOnBattery">
                            <label htmlFor="batteryV4">Voltage on battery</label>
                            <input type="number" name="batteryV4" id="batteryV4" />
                        </div>
                        <div className="currentOnBattery">
                            <label htmlFor="batteryC4">Current on battery</label>
                            <input type="number" name="batteryC4" id="batteryC4" />
                        </div>
                        <div className="batteryTighted">
                            <p>Batteries tighted</p>
                            <label htmlFor="batteryTightedYes4">Yes</label>
                            <input type="radio" name="batteryTighted4" id="batteryTightedYes4" />
                            <label htmlFor="batteryTightedNo4">No</label>
                            <input type="radio" name="batteryTighted4" id="batteryTightedNo4" />
                        </div>
                        <div className="batteryReplacement">
                            <p>Batteries need to be replaced ?</p>
                            <label htmlFor="batteryReplacementYes4">Yes</label>
                            <input type="radio" name="batteryReplacement4" id="batteryReplacementYes4" />
                            <label htmlFor="batteryReplacementNo4">No</label>
                            <input type="radio" name="batteryReplacement4" id="batteryReplacementNo4" />
                        </div>
                        <div className="batteryRemark">
                            <label htmlFor="remark4">Remark</label>
                            <input type="text" name="remark4" id="remark4" />
                        </div>
                    </div>

                    <div className="batteryString">
                        <h5>Battery string 5</h5>
                        <div className="voltageOnRectifier">
                            <label htmlFor="rectifierV5">Voltage on rectifier</label>
                            <input type="number" name="rectifierV5" id="rectifierV5" />
                        </div>
                        <div className="currentOnRectifier">
                            <label htmlFor="rectifierC5">Current on rectifier</label>
                            <input type="number" name="rectifierC5" id="recitifierC5" />
                        </div>
                        <div className="voltageOnBattery">
                            <label htmlFor="batteryV5">Voltage on battery</label>
                            <input type="number" name="batteryV5" id="batteryV5" />
                        </div>
                        <div className="currentOnBattery">
                            <label htmlFor="batteryC5">Current on battery</label>
                            <input type="number" name="batteryC5" id="batteryC5" />
                        </div>
                        <div className="batteryTighted">
                            <p>Batteries tighted</p>
                            <label htmlFor="batteryTightedYes5">Yes</label>
                            <input type="radio" name="batteryTighted5" id="batteryTightedYes5" />
                            <label htmlFor="batteryTightedNo5">No</label>
                            <input type="radio" name="batteryTighted5" id="batteryTightedNo5" />
                        </div>
                        <div className="batteryReplacement">
                            <p>Batteries need to be replaced ?</p>
                            <label htmlFor="batteryReplacementYes5">Yes</label>
                            <input type="radio" name="batteryReplacement5" id="batteryReplacementYes5" />
                            <label htmlFor="batteryReplacementNo5">No</label>
                            <input type="radio" name="batteryReplacement5" id="batteryReplacementNo5" />
                        </div>
                        <div className="batteryRemark">
                            <label htmlFor="remark5">Remark</label>
                            <input type="text" name="remark5" id="remark5" />
                        </div>
                    </div>

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