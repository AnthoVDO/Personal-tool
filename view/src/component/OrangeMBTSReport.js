import React, {useEffect, useState} from 'react';

const OrangeMBTSReport = () => {

    const [technicianName, setTechnicianName] = useState("--Technician name--");
    const [reportDate, setReportDate] = useState(new Date().toLocaleDateString());
    const [siteName, setSiteName] = useState("--Site name--");
    const [iandcissue, setIandcissue] = useState("No");
    const [intrusion, setIntrusion] = useState("yes/no");
    const [fire, setFire] = useState("yes/no");
    const [ml, setMl] = useState("yes/no");
    const [water, setWater] = useState("yes/no");
    const [minorPsu, setMinorPsu] = useState("yes/no");
    const [majorPsu, setMajorPsu] = useState("yes/no");
    const [MPF, setMPF] = useState("yes/no");
    const [temperature, setTemperature] = useState("yes/no");
    const [internalGenerator, setInternalGenerator] = useState("yes/no");
    const [externalGenerator, setExternalGenerator] = useState("yes/no");
    const [wind, setWind] = useState("yes/no");
    const [batteryNumber, setBatteryNumber] = useState("--Number of battery--");
    const [alarmRemark, setAlarmRemark] = useState("");
    const [generalInfo, setGeneralInfo] = useState("");
    const [externalAlarmPresent, setExternalAlarmPresent] = useState("yes");
    const [batteryRemark, setBatteryRemark] = useState("");
    // Battery string 1
    const [batteryReplacement1, setBatteryReplacement1] = useState("--Battery replacement--")
    const [batteryEmplacement1, setBatteryEmplacement1] = useState("--Battery emplacement--");
    const [voltageRectifier1, setVoltageRectifier1] = useState(54);
    const [currentRectifier1, setCurrentRectifier1] = useState("??");
    const [voltageBatt1, setVoltageBatt1] = useState("??");
    const [currentBatt1, setCurrentBatt1] = useState("??");
    const [batteryRemark1, setBatteryRemark1] = useState(null);
    const [batteryTighted1, setBatteryTighted1] = useState("yes");
    // Battery string 2
    const [batteryReplacement2, setBatteryReplacement2] = useState("--Battery replacement--")
    const [batteryEmplacement2, setBatteryEmplacement2] = useState("--Battery emplacement--");
    const [voltageRectifier2, setVoltageRectifier2] = useState(54);
    const [currentRectifier2, setCurrentRectifier2] = useState("??");
    const [voltageBatt2, setVoltageBatt2] = useState("??");
    const [currentBatt2, setCurrentBatt2] = useState("??");
    const [batteryRemark2, setBatteryRemark2] = useState(null);
    const [batteryTighted2, setBatteryTighted2] = useState("yes");
    // Battery string 3
    const [batteryReplacement3, setBatteryReplacement3] = useState("--Battery replacement--")
    const [batteryEmplacement3, setBatteryEmplacement3] = useState("--Battery emplacement--");
    const [voltageRectifier3, setVoltageRectifier3] = useState(54);
    const [currentRectifier3, setCurrentRectifier3] = useState("??");
    const [voltageBatt3, setVoltageBatt3] = useState("??");
    const [currentBatt3, setCurrentBatt3] = useState("??");
    const [batteryRemark3, setBatteryRemark3] = useState(null);
    const [batteryTighted3, setBatteryTighted3] = useState("yes");
    // Battery string 4
    const [batteryReplacement4, setBatteryReplacement4] = useState("--Battery replacement--")
    const [batteryEmplacement4, setBatteryEmplacement4] = useState("--Battery emplacement--");
    const [voltageRectifier4, setVoltageRectifier4] = useState(54);
    const [currentRectifier4, setCurrentRectifier4] = useState("??");
    const [voltageBatt4, setVoltageBatt4] = useState("??");
    const [currentBatt4, setCurrentBatt4] = useState("??");
    const [batteryRemark4, setBatteryRemark4] = useState(null);
    const [batteryTighted4, setBatteryTighted4] = useState("yes");
    // Battery string 5
    const [batteryReplacement5, setBatteryReplacement5] = useState("--Battery replacement--")
    const [batteryEmplacement5, setBatteryEmplacement5] = useState("--Battery emplacement--");
    const [voltageRectifier5, setVoltageRectifier5] = useState(54);
    const [currentRectifier5, setCurrentRectifier5] = useState("??");
    const [voltageBatt5, setVoltageBatt5] = useState("??");
    const [currentBatt5, setCurrentBatt5] = useState("??");
    const [batteryRemark5, setBatteryRemark5] = useState(null);
    const [batteryTighted5, setBatteryTighted5] = useState("yes");

    const [remark, setRemark] = useState("no remark")






    const copyToClipBoard = (e) => {

        /* First try but there isn't rich text with it */
        // const text = e.target.parentNode.querySelector("section").textContent;
        // const textToCopy = document.createElement('input');
        // document.body.appendChild(textToCopy);
        // textToCopy.value = text;
        // textToCopy.select();
        // document.execCommand("copy");
        // textToCopy.remove();

        /* Copy rich text with this one */
        const text = e.target.parentNode.querySelector("section").innerHTML

        const listener = (ev) => {
            ev.preventDefault();
            ev.clipboardData.setData("text/html", text);
            ev.clipboardData.setData("text/plain", text);
        };
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);

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
                        <input type="text" name="technicianName" id="technicianName" onChange={(e)=>{setTechnicianName(e.target.value)}} placeholder={technicianName} />
                    </div>

                    <div className=" form__label">
                        <label htmlFor="reportDate">Date</label>
                        <input type="date" name="reportDate" id="reportDate" value={reportDate} onChange={(e)=>{setReportDate(e.target.value)}} />
                    </div>

                    <div className=" form__label">
                        <label htmlFor="siteName">Enter site name</label>
                        <input type="text" name="siteName" id="siteName" onChange={(e)=>{setSiteName(e.target.value)}} />

                    </div>

                    <div className=" form__label">
                        <label htmlFor="IandCissue">Issue during I and C ?</label>
                        <input type="text" name="IandCissue" id="IandCissue" onChange={(e)=>{setIandcissue(e.target.value)}} />

                    </div>

                    <div className="form__label">
                        <label htmlFor="generalInfo">General info</label>
                        <textarea name="generalInfo" id="generalInfo" cols="30" rows="10" onChange={(e)=>{
                            setGeneralInfo(e.target.value)
                        }}></textarea>
                    </div>

                    <h4>External alarms:</h4>
                    <div className="form__label radio__label externalAlarmQuestion">
                        <p>External alarms present ?</p>
                        <div className="radio__label__check">
                            <label htmlFor="externalAlarmPresentYes">Yes</label>
                        <input type="radio" name="externalAlarmPresent" id="externalAlarmPresentYes" value="yes" onChange={(e)=>{setExternalAlarmPresent(e.target.value)}}/>
                        <label htmlFor="externalAlarmPresentNo">No</label>
                        <input type="radio" name="externalAlarmPresent" id="externalAlarmPresentNo" value="no" onChange={(e)=>{setExternalAlarmPresent(e.target.value)}}/>
                        </div>   
                    </div>

                    {
                        externalAlarmPresent==="yes" ? (

                        
                    <div className="externalAlarmPresent">
                        <div className=" form__label radio__label">
                            <p>Intrusion</p>
                            <div className="radio__label__check">
                            <label htmlFor="intrusionYes">Yes</label>
                            <input type="radio" name="intrusion" id="intrusionYes" value="yes" onChange={(e)=>{setIntrusion(e.target.value)}}/>
                            <label htmlFor="intrusionNo">No</label>
                            <input type="radio" name="intrusion" id="intrusionNo" value="no" onChange={(e)=>{setIntrusion(e.target.value)}} />
                            </div>
                        </div>

                        <div className=" form__label radio__label">
                            <p>Fire</p>
                            <div className="radio__label__check">
                            <label htmlFor="fireYes">Yes</label>
                            <input type="radio" name="fire" id="fireYes" value="yes" onChange={(e)=>{setFire(e.target.value)}}/>
                            <label htmlFor="fireNo">No</label>
                            <input type="radio" name="fire" id="fireNo" value="no" onChange={(e)=>{setFire(e.target.value)}}/>
                            </div>
                        </div>

                        <div className=" form__label radio__label">
                            <p>Mast Light</p>
                            <div className="radio__label__check">
                            <label htmlFor="mlYes">Yes</label>
                            <input type="radio" name="ml" id="mlYes" value="yes" onChange={(e)=>{setMl(e.target.value)}}/>
                            <label htmlFor="mlNo">No</label>
                            <input type="radio" name="ml" id="mlNo" value="no" onChange={(e)=>{setMl(e.target.value)}}/>
                            </div>
                        </div>

                        <div className=" form__label radio__label">
                            <p>Water</p>
                            <div className="radio__label__check">
                            <label htmlFor="waterYes">Yes</label>
                            <input type="radio" name="water" id="waterYes" value="yes" onChange={(e)=>{setWater(e.target.value)}}/>
                            <label htmlFor="waterNo">No</label>
                            <input type="radio" name="water" id="waterNo" value="no" onChange={(e)=>{setWater(e.target.value)}}/>
                            </div>
                        </div>

                        <div className=" form__label radio__label">
                            <p>Minor Psu</p>
                            <div className="radio__label__check">
                            <label htmlFor="minorYes">Yes</label>
                            <input type="radio" name="minor" id="minorYes" value="yes" onChange={(e)=>{setMinorPsu(e.target.value)}}/>
                            <label htmlFor="minorNo">No</label>
                            <input type="radio" name="minor" id="minorNo" value="no" onChange={(e)=>{setMinorPsu(e.target.value)}}/>
                            </div>
                        </div>

                        <div className=" form__label radio__label">
                            <p>Major Psu</p>
                            <div className="radio__label__check">
                            <label htmlFor="majorYes">Yes</label>
                            <input type="radio" name="major" id="majorYes" value="yes" onChange={(e)=>{setMajorPsu(e.target.value)}}/>
                            <label htmlFor="majorNo">No</label>
                            <input type="radio" name="major" id="majorNo" value="no" onChange={(e)=>{setMajorPsu(e.target.value)}}/>
                            </div>
                        </div>

                        <div className=" form__label radio__label">
                            <p>Main power faillure</p>
                            <div className="radio__label__check">
                            <label htmlFor="mpfYes">Yes</label>
                            <input type="radio" name="mpf" id="mpfYes" value="yes" onChange={(e)=>{setMPF(e.target.value)}}/>
                            <label htmlFor="mpfNo">No</label>
                            <input type="radio" name="mpf" id="mpfNo" value="no" onChange={(e)=>{setMPF(e.target.value)}}/>
                            </div>
                        </div>

                        <div className=" form__label radio__label">
                            <p>Temperature</p>
                            <div className="radio__label__check">
                            <label htmlFor="temperatureYes">Yes</label>
                            <input type="radio" name="temperature" id="temperatureYes" value="yes" onChange={(e)=>{setTemperature(e.target.value)}}/>
                            <label htmlFor="temperatureNo">No</label>
                            <input type="radio" name="temperature" id="temperatureNo" value="no" onChange={(e)=>{setTemperature(e.target.value)}}/>
                            </div>
                        </div>

                        <h4>Supplement external alarm</h4>

                        <div className=" form__label radio__label">
                            <p>Internal generator</p>
                            <div className="radio__label__check">
                            <label htmlFor="igYes">Yes</label>
                            <input type="radio" name="ig" id="igYes" value="yes" onChange={(e)=>{setInternalGenerator(e.target.value)}}/>
                            <label htmlFor="igNo">No</label>
                            <input type="radio" name="ig" id="igNo" value="no" onChange={(e)=>{setInternalGenerator(e.target.value)}}/>
                            </div>
                        </div>

                        <div className=" form__label radio__label">
                            <p>External generator</p>
                            <div className="radio__label__check">
                            <label htmlFor="egYes">Yes</label>
                            <input type="radio" name="eg" id="egYes" value="yes" onChange={(e)=>{setExternalGenerator(e.target.value)}}/>
                            <label htmlFor="egNo">No</label>
                            <input type="radio" name="eg" id="egNo" value="no" onChange={(e)=>{setExternalGenerator(e.target.value)}}/>
                            </div>
                        </div>

                        <div className=" form__label radio__label">
                            <p>Wind</p>
                            <div className="radio__label__check">
                            <label htmlFor="windYes">Yes</label>
                            <input type="radio" name="wind" id="windYes" value="yes" onChange={(e)=>{setWind(e.target.value)}}/>
                            <label htmlFor="windNo">No</label>
                            <input type="radio" name="wind" id="windNo" value="no" onChange={(e)=>{setWind(e.target.value)}}/>
                            </div>
                        </div>
                        </div>

                    ) : null
                    }
                    <div className="form__label mg-top-20px">
                        <label htmlFor="alarmRemark">Alarm remark</label>
                        <textarea name="alarmRemark" id="alarmRemark" cols="30" rows="10" onChange={(e)=>{setAlarmRemark(e.target.value)}} ></textarea>
                    </div>

                    <h4>Batteries</h4>

                    <div className=" form__label radio__label">
                        <label htmlFor="batteryNumber">Number of battery string present</label>
                        <input type="number" name="batteryNumber" id="batteryNumber" onChange={(e)=>{setBatteryNumber(e.target.value)}}  />
                    </div>

                    <div id="batteryNumberElement">
                    {batteryNumber >= 1 ? (


                    <div className="batteryString">
                        <h5>Battery string 1</h5>
                        <div className="form__label">
                            <label htmlFor="batteryEmplacement1">Battery emplacement</label>
                            <input type="text" name="batteryEmplacement1" id="batteryEmplacement1" onChange={(e)=>{setBatteryEmplacement1(e.target.value)}} />
                        </div>
                        <div className="voltageOnRectifier form__label">
                            <label htmlFor="rectifierV1">Voltage on rectifier</label>
                            <input type="number" name="rectifierV1" id="rectifierV1" onChange={(e)=>{setVoltageRectifier1(e.target.value)}} placeholder="54"/>
                        </div>
                        <div className="currentOnRectifier form__label">
                            <label htmlFor="rectifierC1">Current on rectifier</label>
                            <input type="number" name="rectifierC1" id="rectifierC1"  onChange={(e)=>{setCurrentRectifier1(e.target.value)}}/>
                        </div>
                        <div className="voltageOnBattery form__label">
                            <label htmlFor="batteryV1">Voltage on battery</label>
                            <input type="number" name="batteryV1" id="batteryV1" onChange={(e)=>{setVoltageBatt1(e.target.value)}} />
                        </div>
                        <div className="currentOnBattery form__label">
                            <label htmlFor="batteryC1">Current on battery</label>
                            <input type="number" name="batteryC1" id="batteryC1" onChange={(e)=>{setCurrentBatt1(e.target.value)}} />
                        </div>
                        <div className="batteryTighted  form__label">
                            <p>Batteries tighted</p>
                            <div className="radio__label__check">
                            <label htmlFor="batteryTightedYes1">Yes</label>
                            <input type="radio" name="batteryTighted1" id="batteryTightedYes1" value="yes" onChange={(e)=>{setBatteryTighted1(e.target.value) }} />
                            <label htmlFor="batteryTightedNo1">No</label>
                            <input type="radio" name="batteryTighted1" id="batteryTightedNo1" value="no" onChange={(e)=>{setBatteryTighted1(e.target.value) }}/>
                            </div>
                            
                        </div>
                        <div className="batteryReplacement form__label">
                            <p>Batteries need to be replaced ?</p>
                            <div className="radio__label__check">
                            <label htmlFor="batteryReplacementYes1">Yes</label>
                            <input type="radio" name="batteryReplacement1" id="batteryReplacementYes1" value="yes" onChange={(e)=>{setBatteryReplacement1(e.target.value)}}/>
                            <label htmlFor="batteryReplacementNo1">No</label>
                            <input type="radio" name="batteryReplacement1" id="batteryReplacementNo1" value="no" onChange={(e)=>{setBatteryReplacement1(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="batteryRemark form__label">
                            <label htmlFor="remark1">Remark</label>
                            <input type="text" name="remark1" id="remark1" onChange={(e)=>{setBatteryRemark1(e.target.value)}} />
                        </div>
                    </div>
):null}
                    {batteryNumber >= 2 ? (

                    
                    <div className="batteryString">
                        <h5>Battery string 2</h5>
                        <div className="form__label">
                            <label htmlFor="batteryEmplacement2">Battery emplacement</label>
                            <input type="text" name="batteryEmplacement2" id="batteryEmplacement2" onChange={(e)=>{setBatteryEmplacement2(e.target.value)}} />
                        </div>
                        <div className="voltageOnRectifier form__label">
                            <label htmlFor="rectifierV2">Voltage on rectifier</label>
                            <input type="number" name="rectifierV2" onChange={(e)=>{setVoltageRectifier2(e.target.value)}} id="rectifierV2" placeholder="54"/>
                        </div>
                        <div className="currentOnRectifier form__label">
                            <label htmlFor="rectifierC2">Current on rectifier</label>
                            <input type="number" name="rectifierC2" onChange={(e)=>{setCurrentRectifier2(e.target.value)}} id="rectifierC2" />
                        </div>
                        <div className="voltageOnBattery form__label">
                            <label htmlFor="batteryV2">Voltage on battery</label>
                            <input type="number" name="batteryV2" onChange={(e)=>{setVoltageBatt2(e.target.value)}} id="batteryV2" />
                        </div>
                        <div className="currentOnBattery form__label">
                            <label htmlFor="batteryC2">Current on battery</label>
                            <input type="number" name="batteryC2" onChange={(e)=>{setCurrentBatt2(e.target.value)}} id="batteryC2" />
                        </div>
                        <div className="batteryTighted form__label">
                            <p>Batteries tighted</p>
                            <div className="radio__label__check">
                                <label htmlFor="batteryTightedYes2">Yes</label>
                            <input type="radio" name="batteryTighted2" id="batteryTightedYes2" value="yes" onChange={(e)=>{setBatteryTighted2(e.target.value) }}/>
                            <label htmlFor="batteryTightedNo2">No</label>
                            <input type="radio" name="batteryTighted2" id="batteryTightedNo2" value="no" onChange={(e)=>{setBatteryTighted2(e.target.value) }}/>
                            </div>
                            
                        </div>
                        <div className="batteryReplacement form__label">
                            <p>Batteries need to be replaced ?</p>
                            <div className="radio__label__check">
                                <label htmlFor="batteryReplacementYes2">Yes</label>
                            <input type="radio" name="batteryReplacement2" id="batteryReplacementYes2" value="yes" onChange={(e)=>{setBatteryReplacement2(e.target.value)}}/>
                            <label htmlFor="batteryReplacementNo2">No</label>
                            <input type="radio" name="batteryReplacement2" id="batteryReplacementNo2" value="no" onChange={(e)=>{setBatteryReplacement2(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="batteryRemark2 form__label">
                            <label htmlFor="remark2">Remark</label>
                            <input type="text" name="remark2" id="remark2" onChange={(e)=>{setBatteryRemark2(e.target.value)}}/>
                        </div>
                    </div>
                    ):null}
                    {batteryNumber >= 3 ? (


                    <div className="batteryString">
                        <h5>Battery string 3</h5>
                        <div className="form__label">
                            <label htmlFor="batteryEmplacement3">Battery emplacement</label>
                            <input type="text" name="batteryEmplacement3" id="batteryEmplacement3" onChange={(e)=>{setBatteryEmplacement3(e.target.value)}} />
                        </div>
                        <div className="voltageOnRectifier form__label">
                            <label htmlFor="rectifierV3">Voltage on rectifier</label>
                            <input type="number" name="rectifierV3" onChange={(e)=>{setVoltageRectifier3(e.target.value)}} id="rectifierV3" placeholder="54"/>
                        </div>
                        <div className="currentOnRectifier form__label">
                            <label htmlFor="rectifierC3">Current on rectifier</label>
                            <input type="number" name="rectifierC3" onChange={(e)=>{setCurrentRectifier3(e.target.value)}} id="rectifierC3" />
                        </div>
                        <div className="voltageOnBattery form__label">
                            <label htmlFor="batteryV3">Voltage on battery</label>
                            <input type="number" name="batteryV3" onChange={(e)=>{setVoltageBatt3(e.target.value)}} id="batteryV3" />
                        </div>
                        <div className="currentOnBattery form__label">
                            <label htmlFor="batteryC3">Current on battery</label>
                            <input type="number" name="batteryC3" onChange={(e)=>{setCurrentBatt3(e.target.value)}} id="batteryC3" />
                        </div>
                        <div className="batteryTighted form__label">
                            <p>Batteries tighted</p>
                            <div className="radio__label__check">
                                <label htmlFor="batteryTightedYes3">Yes</label>
                            <input type="radio" name="batteryTighted3" id="batteryTightedYes3" value="yes" onChange={(e)=>{setBatteryTighted3(e.target.value) }}/>
                            <label htmlFor="batteryTightedNo3">No</label>
                            <input type="radio" name="batteryTighted3" id="batteryTightedNo3" value="no" onChange={(e)=>{setBatteryTighted3(e.target.value) }}/>
                            </div>
                            
                        </div>
                        <div className="batteryReplacement form__label">
                            <p>Batteries need to be replaced ?</p>
                            <div className="radio__label__check">
                                <label htmlFor="batteryReplacementYes3">Yes</label>
                            <input type="radio" name="batteryReplacement3" id="batteryReplacementYes3" value="yes" onChange={(e)=>{setBatteryReplacement3(e.target.value)}}/>
                            <label htmlFor="batteryReplacementNo3">No</label>
                            <input type="radio" name="batteryReplacement3" id="batteryReplacementNo3" value="no" onChange={(e)=>{setBatteryReplacement3(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="batteryRemark form__label">
                            <label htmlFor="remark3">Remark</label>
                            <input type="text" name="remark3" id="remark3" onChange={(e)=>{setBatteryRemark3(e.target.value)}}/>
                        </div>
                    </div>
):null}
{batteryNumber >= 4 ? (


                    <div className="batteryString">
                        <h5>Battery string 4</h5>
                        <div className="form__label">
                            <label htmlFor="batteryEmplacement4">Battery emplacement</label>
                            <input type="text" name="batteryEmplacement4" id="batteryEmplacement4" onChange={(e)=>{setBatteryEmplacement4(e.target.value)}} />
                        </div>
                        <div className="voltageOnRectifier form__label">
                            <label htmlFor="rectifierV4">Voltage on rectifier</label>
                            <input type="number" name="rectifierV4" onChange={(e)=>{setVoltageRectifier4(e.target.value)}} id="rectifierV4" placeholder="54"/>
                        </div>
                        <div className="currentOnRectifier form__label">
                            <label htmlFor="rectifierC4">Current on rectifier</label>
                            <input type="number" name="rectifierC4" onChange={(e)=>{setCurrentRectifier4(e.target.value)}} id="rectifierC4" />
                        </div>
                        <div className="voltageOnBattery form__label">
                            <label htmlFor="batteryV4">Voltage on battery</label>
                            <input type="number" name="batteryV4" onChange={(e)=>{setVoltageBatt4(e.target.value)}} id="batteryV4" />
                        </div>
                        <div className="currentOnBattery form__label">
                            <label htmlFor="batteryC4">Current on battery</label>
                            <input type="number" name="batteryC4" onChange={(e)=>{setCurrentBatt4(e.target.value)}} id="batteryC4" />
                        </div>
                        <div className="batteryTighted form__label">
                            <p>Batteries tighted</p>
                            <div className="radio__label__check">
                                <label htmlFor="batteryTightedYes4">Yes</label>
                            <input type="radio" name="batteryTighted4" id="batteryTightedYes4" value="yes" onChange={(e)=>{setBatteryTighted4(e.target.value) }}/>
                            <label htmlFor="batteryTightedNo4">No</label>
                            <input type="radio" name="batteryTighted4" id="batteryTightedNo4" value="no" onChange={(e)=>{setBatteryTighted4(e.target.value) }}/>
                            </div>
                            
                        </div>
                        <div className="batteryReplacement form__label">
                            <p>Batteries need to be replaced ?</p>
                            <div className="radio__label__check">
                                <label htmlFor="batteryReplacementYes4">Yes</label>
                            <input type="radio" name="batteryReplacement4" id="batteryReplacementYes4" value="yes" onChange={(e)=>{setBatteryReplacement4(e.target.value)}}/>
                            <label htmlFor="batteryReplacementNo4">No</label>
                            <input type="radio" name="batteryReplacement4" id="batteryReplacementNo4" value="no" onChange={(e)=>{setBatteryReplacement4(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="batteryRemark form__label">
                            <label htmlFor="remark4">Remark</label>
                            <input type="text" name="remark4" id="remark4" onChange={(e)=>{setBatteryRemark4(e.target.value)}}/>
                        </div>
                    </div>
):null}
{batteryNumber >= 5 ? (


                    <div className="batteryString">
                        <h5>Battery string 5</h5>
                        <div className="form__label">
                            <label htmlFor="batteryEmplacement5">Battery emplacement</label>
                            <input type="text" name="batteryEmplacement5" id="batteryEmplacement5" onChange={(e)=>{setBatteryEmplacement5(e.target.value)}} />
                        </div>
                        <div className="voltageOnRectifier form__label">
                            <label htmlFor="rectifierV5">Voltage on rectifier</label>
                            <input type="number" name="rectifierV5" onChange={(e)=>{setVoltageRectifier5(e.target.value)}} id="rectifierV5" placeholder="54"/>
                        </div>
                        <div className="currentOnRectifier form__label">
                            <label htmlFor="rectifierC5">Current on rectifier</label>
                            <input type="number" name="rectifierC5" onChange={(e)=>{setCurrentRectifier5(e.target.value)}} id="rectifierC5" />
                        </div>
                        <div className="voltageOnBattery form__label">
                            <label htmlFor="batteryV5">Voltage on battery</label>
                            <input type="number" name="batteryV5" onChange={(e)=>{setVoltageBatt5(e.target.value)}} id="batteryV5" />
                        </div>
                        <div className="currentOnBattery form__label">
                            <label htmlFor="batteryC5">Current on battery</label>
                            <input type="number" name="batteryC5" onChange={(e)=>{setCurrentBatt5(e.target.value)}} id="batteryC5" />
                        </div>
                        <div className="batteryTighted form__label">
                            <p>Batteries tighted</p>
                            <div className="radio__label__check">
                            <label htmlFor="batteryTightedYes5">Yes</label>
                            <input type="radio" name="batteryTighted5" id="batteryTightedYes5" value="yes" onChange={(e)=>{setBatteryTighted5(e.target.value) }}/>
                            <label htmlFor="batteryTightedNo5">No</label>
                            <input type="radio" name="batteryTighted5" id="batteryTightedNo5" value="no" onChange={(e)=>{setBatteryTighted5(e.target.value) }}/>
                            </div>
                            
                        </div>
                        <div className="batteryReplacement form__label">
                            <p>Batteries need to be replaced ?</p>
                            <div className="radio__label__check">
                                <label htmlFor="batteryReplacementYes5">Yes</label>
                            <input type="radio" name="batteryReplacement5" id="batteryReplacementYes5" value="yes" onChange={(e)=>{setBatteryReplacement5(e.target.value)}}/>
                            <label htmlFor="batteryReplacementNo5">No</label>
                            <input type="radio" name="batteryReplacement5" id="batteryReplacementNo5" value="no" onChange={(e)=>{setBatteryReplacement5(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="batteryRemark form__label">
                            <label htmlFor="remark5">Remark</label>
                            <input type="text" name="remark5" id="remark5" onChange={(e)=>{setBatteryRemark5(e.target.value)}} />
                        </div>
                    </div>
):null}
                    <div className="form__label mg-top-20px">
                        <label htmlFor="generalBatteryRemark">General battery remark</label>
                        <textarea name="generalBatteryRemark" id="generalBatteryRemark" cols="30" rows="10" onChange={(e)=>{setBatteryRemark(e.target.value)}}></textarea>
                    </div>
                    <div className="remark form__label mg-top-20px">
                    <label htmlFor="endFormRemark">Remark</label>
                    <textarea name="endFormRemark__input" id="" cols="30" rows="10" onChange={(e)=>{setRemark(e.target.value)}}>Add remark here</textarea>
                        
                    </div>
                    </div>

                    


                    

                   





                </form>

            </div>

                <div className="form__view">

                

                <div className="form__view__object">
                <h4>Object</h4>
                <section>

                   
                {siteName} Report I and C {technicianName}


                </section>
                <button 
                className="copy__btn"
                onClick={(e)=>copyToClipBoard(e)}
                >Copy to clipboard</button>

                 

                </div>

                

                <div className="form__view__body" >
                <h4>Body</h4>
                <section>

                <h3>{siteName} Report I&C {technicianName}</h3>
                <h4>Report info:</h4>
                <ul>
                    <li>Name: {technicianName}</li>
                    <li>Date: {reportDate}</li>
                    <li>Site code: {siteName}</li>
                </ul>
                <h4>General info</h4>
                <p>
                {generalInfo}
                </p>
                <h4>Alarms</h4>
                {
                    externalAlarmPresent === "yes"? (
                    <ul>
                    <li>{intrusion}</li>
                    <li>{fire}</li>
                    <li>{ml}</li>
                    <li>{water}</li>
                    <li>{minorPsu}</li>
                    <li>{majorPsu}</li>
                    <li>{MPF}</li>
                    <li>{temperature}</li>
                    <li>{internalGenerator}</li>
                    <li>{externalGenerator}</li>
                    <li>{wind}</li>
                </ul>
                    ) : "No external alarms present on site"
                }
                
                <p>
                {alarmRemark}
                </p>
                <h4>Batteries</h4>
                There is {batteryNumber} batteries string.
                {batteryNumber >= 1 ? (
<div className="batteryStringAnswer">
    <h5>Battery string 1 {batteryEmplacement1}</h5>
                <ul>
                    <li>Voltage on rectifier: {voltageRectifier1} V</li>
                    <li>Current on rectifier: {currentRectifier1} A</li>
                    <li>Voltage on batteries: {voltageBatt1} V</li>
                    <li>Current on battery: {currentBatt1} A</li>
                    <li>Batteries need to be replaced ? : {batteryReplacement1} </li>
                    <li>Batteries tighted: {batteryTighted1}</li>
                    {batteryRemark1 != null ? <li>Batteries remark: {batteryRemark1}</li> : null}
                    
                </ul>
</div>
):null}
{batteryNumber >= 2 ? (
<div className="batteryStringAnswer">
    <h5>Battery string 2 {batteryEmplacement2}</h5>
                <ul>
                    <li>Voltage on rectifier: {voltageRectifier2} V</li>
                    <li>Current on rectifier: {currentRectifier2} A</li>
                    <li>Voltage on batteries: {voltageBatt2} V</li>
                    <li>Current on battery: {currentBatt2} A</li>
                    <li>Batteries need to be replaced ? : {batteryReplacement2} </li>
                    <li>Batteries tighted: {batteryTighted1}</li>
                    {batteryRemark2 != null ? <li>Batteries remark: {batteryRemark2}</li> : null}
                </ul>
</div>
):null}

                
{batteryNumber >= 3 ? (
<div className="batteryStringAnswer">
    <h5>Battery string 3 {batteryEmplacement3}</h5>
                <ul>
                    <li>Voltage on rectifier: {voltageRectifier3} V</li>
                    <li>Current on rectifier: {currentRectifier3} A</li>
                    <li>Voltage on batteries: {voltageBatt3} V</li>
                    <li>Current on battery: {currentBatt3} A</li>
                    <li>Batteries need to be replaced ? : {batteryReplacement3} </li>
                    <li>Batteries tighted: {batteryTighted1}</li>
                    {batteryRemark3 != null ? <li>Batteries remark: {batteryRemark3}</li> : null}
                </ul>
</div>
):null}
                
{batteryNumber >= 4 ? (
<div className="batteryStringAnswer">
    <h5>Battery string 4 {batteryEmplacement4}</h5>
                <ul>
                    <li>Voltage on rectifier: {voltageRectifier4} V</li>
                    <li>Current on rectifier: {currentRectifier4} A</li>
                    <li>Voltage on batteries: {voltageBatt4} V</li>
                    <li>Current on battery: {currentBatt4} A</li>
                    <li>Batteries need to be replaced ? : {batteryReplacement4} </li>
                    <li>Batteries tighted: {batteryTighted1}</li>
                    {batteryRemark4 != null ? <li>Batteries remark: {batteryRemark4}</li> : null}
                </ul>
</div>
):null}
                
{batteryNumber >= 5 ? (
<div className="batteryStringAnswer">
    <h5>Battery string 5 {batteryEmplacement5}</h5>
                <ul>
                    <li>Voltage on rectifier: {voltageRectifier5} V</li>
                    <li>Current on rectifier: {currentRectifier5} A</li>
                    <li>Voltage on batteries: {voltageBatt5} V</li>
                    <li>Current on battery: {currentBatt5} A</li>
                    <li>Batteries need to be replaced ? : {batteryReplacement5} </li>
                    <li>Batteries tighted: {batteryTighted1}</li>
                    {batteryRemark5 != null ? <li>Batteries remark: {batteryRemark5}</li> : null}
                </ul>
</div>
):null}
                {batteryRemark!=""? (
                <div className="batteryRemark">
                <h4>Battery remark</h4>
                <p>{batteryRemark}</p>
                </div>
                
                ) : null}
                
                <h4>Remark</h4>
                
                {remark!=""? remark : "I and C done"}
                

                    




                </section>
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