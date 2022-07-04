import request from 'request';
import cheerio from 'cheerio';
function getAllMatcheslink(url)
{
    request (url,function(err,response,html)
    {
        if(err)
        {
            console.log(err);

        }
        else
        {
            extracAllLinks(html);

        }
    })
}
function extracAllLinks(html)
{
    let $=cheerio.load(html);
    let scorecardElems=$("a[data-hover='Scorecard']");
    for( let i=0;i<scorecardElems.length;i++)
    {
        let link=$(scorecardElems[i]).attr("href");
        let fullLink="https://www.espncricinfo.com/"+link;

      console.log(fullLink);

    }
}
module.exports={
    gAlmatches:getAllMatcheslink

}