// import { getServerSideProps } from '../../libs/sheets';
import { google } from 'googleapis';

export async function getServerSideProps() {

    console.log("hello")
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });

    const range = 'Sheet1!A2:C2';

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });

    const [show, info, link] = response.data.values[0];

    console.log(show, info, link);
}

export default async function ShowsPage() {

    return (
        <div>Shows</div>
    )

    // if(!showData) {
    //     return( 
    //         <div>
    //         <h1>Shows</h1>
    //     </div>
    //     )
    // }
    // else {
    //     return(
    //         <div>
    //             <h1>Shows</h1>
                
    //             <p>{showData.props.show}</p>
    //             <p>{showData.props.info}</p>
    //             <p>{showData.props.link}</p>
    //         </div>
    //     )
    // }
}