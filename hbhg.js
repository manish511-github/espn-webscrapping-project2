const url="https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
import request from 'request';
import cheerio from 'cheerio';
request(url,cb);

   function cb(err,response,html)
    {
        if(err)
        {
            console.log(err);

        }
        else{
            extractMatchDetails(html);

        }
    }
function extractMatchDetails(html)
{
    let $=cheerio.load(html);
    let descElem=$(".event .description");
    let result=$(".event .status-text");
    //let stringArr=descElem.text().split(",");
    console.log(descElem);

   // let venue= stringArr[1].trim();
    //let date=stringArr[2].trim();
    
    // result=result.text();
     //console.log(venue);
     //console.log(date);
     console.log(result);




}

