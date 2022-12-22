import Navbar from "../Navbar/Navbar";
import './AdminDetails.css';
import CEO from '../img/spons1.jpeg';
import OlaDokun from '../img/oladokun.png';
import Omobolanle from '../img/omo.jpg';
import Richard from '../img/spons2.png';
import Uduak from '../img/mary.jpg';
import Farom from '../img/farom.jpg';
import Damilola from '../img/hr.jpeg';
import Femi from '../img/cto.jpg';
import Busola from '../img/bus.jpeg';
import Ola from '../img/ola.jpg';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
// import data from './adminDetails.json';

export const AdminDetails = () => {

    const { member_value } = useParams()

    const [ Member, setMember ] = useState(null)

    useEffect( () => {
        let members =[
    
            {
                name:"Chief Babajide Olatunde-Agbeja",
                biography:`A Fellow of the Nigerian Council of Registered Insurance Brokers, he graduated from the University of Ife with a degree in Economics in 1980. He trained as an Insurance Broker with the firm of Femi Johnson & Company and resigned as a Senior Manager after ten years of meritorious service. He set up Boff & Company Insurance Brokers Limited in September 1991. He became a Chartered Insurance Practitioner in 1995 and a Chartered Insurance Broker in 2001.
    
                Babajide has extensive knowledge and experience in both local and international placement of risks and attended many professional, management, leadership and insurance Courses within and outside Nigeria. 
                
                An experienced trainer, he has delivered Papers internationally on leadership, management and insurance matters multiple times and has attended over one hundred International Conferences and congresses in all the continents of the world. 
                
                A Council member of the Nigerian Council of Registered Insurance Brokers since 1995, Babajide was elected and served as the President and Chairman of Council between October 2005 and October 2007.
                He also served as the Chairman of the Board of Fellows of the Council from 2011 to 2015. He currently serves as the Chairman, Finance and General purpose committee. 
                
                A dedicated member of the Junior Chamber International (JCI – a Management and Leadership organization), he was elected the National President of the Nigerian Junior Chamber in 1995, elected the JCI Vice President in 1996 in charge of the activities of the organization in the U.S.A and Dutch Caribbean. 
                
                He serves on the board of many companies involved in insurance broking, finance, banking, estate development, construction, youth development, as Chairman, director and independent director.
                
                He is a member of the Board of Trustees for-:
                    • Ibadan Polo Club						              - 2015
                    • Global Youth Empowerment Fund (JCI/UN SDG Initiative)  - 2016
                    • Ibadan Golf Club								   - 2017
                
                Babajide is married to Fehintola (a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN)) and they are blessed with children and grandchildren.`,
                value:"babajide",
                role:"Chairman, Advisory Board",
                image:CEO
            },
    
            {
                name:"Oladokun A. Oye",
                biography:`I am a Professional MBA degree holder with proven track record in my career. I negotiate
                substantial gains on company portfolio improving company workflow system with
                effective management processes. I drive to improve company profitability through sales
                and marketing strategy formulations and implementation. I am very resourceful, enthusiastic,
                proactive and positive minded in my job and career.
                
                My career spans across Nigeria, Sub-Sahara Africa and Europe, with key position held in
                Account Management, Sales, retail, High Value Business Management, Change Advisory, project Management, General Management: 
                Network and Enterprise Operations Regional Operations Director, Mobile Financeial Services, Direct sales and Home Broadband.
                
                I am currently a Vice President at Airtel Network Limited.`,
                role:"Member, Advisory Board",
                value:"oladokun",
                image:OlaDokun
            },
    
            {
                name:"Dr Omobolanle Olowu",
                biography:`Dr. Omobolanle Rosemary Olowu was the Director in charge of Public Private Partnership and Diaspora Unit of the Federal Ministry of Health, Abuja. She is a graduate of the College of Medicine, University of Ibadan, and holds an MSc in Ophthalmology (University of Bristol, UK) and a Diploma in Ophthalmology (West African College of Surgeons).Dr. Omobolanle Olowu is an Old student of St. Teresa’s College 1973-1977 set.
                .
                She had 35years’ experience in Public Service  and retired meritoriously from public service early this year at the Statutory  age of 60years. She  is an alumnus of the National Institute of Policy and Strategic Studies, Kuru. She  occupied various positions in the Federal Ministry of Health including National Coordinator, National Programme for the Prevention of Blindness and Head, Inspectorate Division of the Department of Hospital Services.  
                She is the current  Chairman of the Alumni Association of the National Institute (AANI) Abuja Chapter.`,
                role:"Member, Advisory Board",
                value:"bolanle",
                image:Omobolanle
            },
    
            {
                name:"Richard Ogunmodede",
                biography:`He retire from First Bank of Nigeria in an Executive position effective 2 January 2014.
                He graduated with a First Class degree in Accounting at O.A.U (Ife).
                He has 30 years industry experience and had worked with Accenture and Citibank.
                He is a member of both the Institute of Chartered Accountants of Nigeria and the Chartered Intitute of Bankers of Nigeria.`,
                role:"Member, Advisory Board",
                value:"richard",
                image:Richard
            },
    
            {
                name:"Uduk, Mary Joseph",
                biography:`Ms. Mary Uduk, mni is the former Acting Director General of Securities and Exchange Commission (SEC), Nigeria. Prior to this, she was the Ag. Executive Commissioner Operations. She was at various times the Head of Internal Control, Financial Standards & Corporate Governance, Investment Management, Securities & Investment Services Departments, among others in the Commission.
                    Ms. Uduk is currently the Managing Director of Capital Market Support Services Ltd. 
                    Her career then as a regulator date back to October 1986 and spanned many functions from corporate finance, administration, to providing regulatory structure and due diligence for capital market transactions. She served on various national and international committees such as, the SEC/DMO Committee on Nigeria’s first Sovereign debt bond issuance, the Bond Market Technical Committee, the Technical Committee on Banking and Insurance industries consolidation, the Legal and Regulatory Technical Committee of the West African Capital Market Integration Council`,
                value:"Uduk",
                role:"Member, Advisory Board",
                image:Uduak
            },
    
            {
                name:"Temitope Farombi MBBS, FMCP (Neurology)",
                biography:`Temitope Farombi MBBS, FMCP (Neurology), is a graduate of University of Ibadan. She trained in internal medicine at the University College Hospital (UCH) and Neurology at UCH Ibadan Nigeria. She obtained her masters at King’s College London in Clinical Neuroscience. 
                She is the founder and CEO of Online Health company Limited. A telehealth platform that provide easy access to health care services. Through her clinical and personal experience, she understands the difficulties patients face to access healthcare services and the unpleasant outcome of late presentations and delay in seeking help.
                Herself and her team of young and enthusiast personnel have built a mobile and web application platform that allow for easy access to healthcare services through mobile phones  
                They currently provide services to over 200,000 clients in Nigeria through partnership with health insurance companies and have had over eleven thousand subscribers to their platforms. They continue to partner with healthcare providers and industry stakeholders in Nigeria. Their goal is to be a one-stop shop for all health care services in Nigeria and Africa.
                She specializes in the critical care neurology of the elderly, movement disorders, Dementia and headaches. 
                She was a visiting scholar to the Northwestern University Chicago, USA and Haceteppe University, Ankara Turkey. An international keynote speaker on many issues of chronic neurological diseases in the elderly, a member of many learned societies including Movement disorder society and Nigerian Society of Neurological Sciences.  Regular presenter at conferences and has published articles in scientific journals.
                Her hobbies are golfing, traveling and meeting people.
                `,
                role:"Founder and CEO",
                value:"temitope",
                image:Farom
            },
    
            {
                name:"Adelaja Damilola",
                biography:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut egestas nibh, quis viverra ligula. Phasellus sed maximus nisi. Etiam placerat ipsum eu bibendum luctus. Ut iaculis nulla nec purus finibus, vitae dictum velit volutpat. In hac habitasse platea dictumst. In quis viverra ex. Duis mi ante, facilisis sed aliquet quis, posuere et eros. Curabitur consequat accumsan orci et convallis. Curabitur at quam ut metus semper facilisis eu vel tellus. Vestibulum vel orci eu libero suscipit tempus id vel ante. Ut dignissim dolor laoreet, convallis sem nec, hendrerit sem. Curabitur tempus ante sed nunc cursus, a cursus mauris rhoncus. Ut diam enim, convallis et odio eget, efficitur aliquam lacus. Aenean quis nisi eu erat imperdiet tincidunt. Sed ac neque non ipsum dignissim eleifend fermentum non arcu.
                    Sed tincidunt ornare scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et dictum lacus, quis mollis lorem. Maecenas commodo, metus eu tincidunt sodales, mi nulla scelerisque ipsum, at egestas lectus metus quis odio. Phasellus at dictum nibh. In ac odio sed massa egestas vehicula. Mauris dictum dignissim faucibus. Vestibulum rutrum sodales nibh, venenatis euismod augue congue nec. Integer id tortor nulla. Mauris a nunc elementum, facilisis nisi semper, luctus mauris.
                    Pellentesque volutpat, quam a faucibus fringilla, nibh enim vulputate arcu, sed molestie leo dolor sed lectus. Phasellus bibendum, elit elementum sollicitudin placerat, elit nunc molestie urna, non pulvinar ligula metus eu nisi. Aliquam gravida lorem sit amet facilisis elementum. Etiam facilisis sem at lobortis efficitur. Sed venenatis nisi et mollis blandit. Morbi ut sollicitudin ante, sed semper nunc.`,
                role:"Human Resource Manager",
                value:"damilola",
                image:Damilola
            },
    
            {
                name:"Femi Olayiwola",
                biography:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut egestas nibh, quis viverra ligula. Phasellus sed maximus nisi. Etiam placerat ipsum eu bibendum luctus. Ut iaculis nulla nec purus finibus, vitae dictum velit volutpat. In hac habitasse platea dictumst. In quis viverra ex. Duis mi ante, facilisis sed aliquet quis, posuere et eros. Curabitur consequat accumsan orci et convallis. Curabitur at quam ut metus semper facilisis eu vel tellus. Vestibulum vel orci eu libero suscipit tempus id vel ante. Ut dignissim dolor laoreet, convallis sem nec, hendrerit sem. Curabitur tempus ante sed nunc cursus, a cursus mauris rhoncus. Ut diam enim, convallis et odio eget, efficitur aliquam lacus. Aenean quis nisi eu erat imperdiet tincidunt. Sed ac neque non ipsum dignissim eleifend fermentum non arcu.
                    Sed tincidunt ornare scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et dictum lacus, quis mollis lorem. Maecenas commodo, metus eu tincidunt sodales, mi nulla scelerisque ipsum, at egestas lectus metus quis odio. Phasellus at dictum nibh. In ac odio sed massa egestas vehicula. Mauris dictum dignissim faucibus. Vestibulum rutrum sodales nibh, venenatis euismod augue congue nec. Integer id tortor nulla. Mauris a nunc elementum, facilisis nisi semper, luctus mauris.
                    Pellentesque volutpat, quam a faucibus fringilla, nibh enim vulputate arcu, sed molestie leo dolor sed lectus. Phasellus bibendum, elit elementum sollicitudin placerat, elit nunc molestie urna, non pulvinar ligula metus eu nisi. Aliquam gravida lorem sit amet facilisis elementum. Etiam facilisis sem at lobortis efficitur. Sed venenatis nisi et mollis blandit. Morbi ut sollicitudin ante, sed semper nunc.`,
                role:"Chief Technology Officer",
                value:"femi",
                image:Femi
            },
    
            {
                name:"Olubusayo Oluyemi",
                biography:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut egestas nibh, quis viverra ligula. Phasellus sed maximus nisi. Etiam placerat ipsum eu bibendum luctus. Ut iaculis nulla nec purus finibus, vitae dictum velit volutpat. In hac habitasse platea dictumst. In quis viverra ex. Duis mi ante, facilisis sed aliquet quis, posuere et eros. Curabitur consequat accumsan orci et convallis. Curabitur at quam ut metus semper facilisis eu vel tellus. Vestibulum vel orci eu libero suscipit tempus id vel ante. Ut dignissim dolor laoreet, convallis sem nec, hendrerit sem. Curabitur tempus ante sed nunc cursus, a cursus mauris rhoncus. Ut diam enim, convallis et odio eget, efficitur aliquam lacus. Aenean quis nisi eu erat imperdiet tincidunt. Sed ac neque non ipsum dignissim eleifend fermentum non arcu.
                    Sed tincidunt ornare scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et dictum lacus, quis mollis lorem. Maecenas commodo, metus eu tincidunt sodales, mi nulla scelerisque ipsum, at egestas lectus metus quis odio. Phasellus at dictum nibh. In ac odio sed massa egestas vehicula. Mauris dictum dignissim faucibus. Vestibulum rutrum sodales nibh, venenatis euismod augue congue nec. Integer id tortor nulla. Mauris a nunc elementum, facilisis nisi semper, luctus mauris.
                    Pellentesque volutpat, quam a faucibus fringilla, nibh enim vulputate arcu, sed molestie leo dolor sed lectus. Phasellus bibendum, elit elementum sollicitudin placerat, elit nunc molestie urna, non pulvinar ligula metus eu nisi. Aliquam gravida lorem sit amet facilisis elementum. Etiam facilisis sem at lobortis efficitur. Sed venenatis nisi et mollis blandit. Morbi ut sollicitudin ante, sed semper nunc.`,
                role:"Business Development Analyist",
                value:"olubusayo",
                image:Busola
            },
    
            {
                name:"Abass Olaiya",
                biography:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut egestas nibh, quis viverra ligula. Phasellus sed maximus nisi. Etiam placerat ipsum eu bibendum luctus. Ut iaculis nulla nec purus finibus, vitae dictum velit volutpat. In hac habitasse platea dictumst. In quis viverra ex. Duis mi ante, facilisis sed aliquet quis, posuere et eros. Curabitur consequat accumsan orci et convallis. Curabitur at quam ut metus semper facilisis eu vel tellus. Vestibulum vel orci eu libero suscipit tempus id vel ante. Ut dignissim dolor laoreet, convallis sem nec, hendrerit sem. Curabitur tempus ante sed nunc cursus, a cursus mauris rhoncus. Ut diam enim, convallis et odio eget, efficitur aliquam lacus. Aenean quis nisi eu erat imperdiet tincidunt. Sed ac neque non ipsum dignissim eleifend fermentum non arcu.
                    Sed tincidunt ornare scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent et dictum lacus, quis mollis lorem. Maecenas commodo, metus eu tincidunt sodales, mi nulla scelerisque ipsum, at egestas lectus metus quis odio. Phasellus at dictum nibh. In ac odio sed massa egestas vehicula. Mauris dictum dignissim faucibus. Vestibulum rutrum sodales nibh, venenatis euismod augue congue nec. Integer id tortor nulla. Mauris a nunc elementum, facilisis nisi semper, luctus mauris.
                    Pellentesque volutpat, quam a faucibus fringilla, nibh enim vulputate arcu, sed molestie leo dolor sed lectus. Phasellus bibendum, elit elementum sollicitudin placerat, elit nunc molestie urna, non pulvinar ligula metus eu nisi. Aliquam gravida lorem sit amet facilisis elementum. Etiam facilisis sem at lobortis efficitur. Sed venenatis nisi et mollis blandit. Morbi ut sollicitudin ante, sed semper nunc.`,
                role:"Business Development Analyist",
                value:"abass",
                image:Ola
            },
    
        ]

        function checkMember(member) {
            return member.value === member_value;
          }

        let Themember = members.find(checkMember)

        if( Themember ){
            console.log(Themember)
            setMember(Themember)
        }else{
            console.log("none")
        }

    }, [member_value] )

    return (

        <>
            <Navbar/>
            
            { Member ?

                <div className="wellsha" >
                    <div className="circle-parent">
                        <img className="circle-parent-img" src={Member.image} alt=''/>
                    </div>
                    <p className="wellsha-story" >

                        <div className="wellsha-story-name" >
                            {Member.name}
                        </div>

                        <div className="wellsha-story-role" >
                            {Member.role}
                        </div>

                        {Member.biography}
                        
                    </p>
                </div>
            
            
            
            : <> loading </> }

            <Footer/>

        </>

    );

}