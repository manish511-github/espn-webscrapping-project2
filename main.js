const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
import request from 'request';
import cheerio from 'cheerio';
import AllMatcObj from("./Allmatches");
request(url,cb);
function cb(err,response,html)
{
    if(err)
    {
        console.log(err);

    }
    else
    {
        //console.log(html);
     extractLink(html);

    }
}
function extractLink(html)
{
  let $=cheerio.load(html);
  let anchorElem=$("a[data-hover='View All Results']");
  let link=anchorElem.attr("href");
  let fullLink="https://www.espncricinfo.com"+link;
 // console.log(fullLink);
    getAllMatcheslink(fullLink);
    AllMatcObj.gAlmatches(fullLink);
}

