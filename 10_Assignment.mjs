class Cookie
{
    constructor(flavor,coating)
    {
        this.flavor=flavor;
        this.coating=coating;
    }
    describe()
    {
        console.log(`this is a ${this.flavor} flavored cookie with ${this.coating} coating`);
    }
}

function eating(obj)
{
    console.log(`I am eating this ${obj.flavor} flavored cookie`);
}

export { Cookie,eating};