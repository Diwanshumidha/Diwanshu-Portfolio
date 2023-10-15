export default function sitemap(){
    const baseurl = 'https://diwanshumidha.vercel.app/'
    return [
        {
            url:baseurl,
            lastModified:new Date(),
        },
        {
            url:`${baseurl}/projects`,
            lastModified:new Date(),
        },

    ]
}