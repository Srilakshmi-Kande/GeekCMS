import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function SingleBlog(){
    const tempTags = "SpaceX, Nasa, Exploration";
    const tempHtml = `
        <p>Demo content</p>
        <h2>Test h2</h2>
    `
    return <section>
        <div className="flex flex-col gap-4 items-center">
            <Image className="rounded border w-[90%] sm:w-[700px]" src="/thumbnails/dreams.png" width={500} height={250} alt="page title" />
            <div className="meta-of-a-blog space-y-2">
                <div className="flex gap-2 items-center">
                    <Calendar className="text-gray-400 size-4" />
                    <p className="text-gray-400 text-xs">Created on : {dateFormat(new Date())}</p>
                </div>
                <div className="flex text-xs items-center gap-2">
                    <p>Category : </p>
                    <p className="badge border bg-gray-600/30 border-gray-700 w-fit px-[4px] py-[2px] rounded">Space Exploration</p>
                </div>
                <div className="flex text-xs items-center gap-2">
                    <p>Tags : </p>
                    {tempTags.split(",").map(tag=><p className="badge border bg-gray-600/30 border-gray-700 w-fit px-[4px] py-[2px] rounded">{tag}</p>)}
                </div>
            </div>
            {/* <div className="content" dangerouslySetInnerHTML={{__html: tempHtml}}>
            </div> */}
            <p className="text-sm w-[90%] md:w-2/3 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, odio accusamus est vero illum repellendus velit consequatur veniam vel ullam dignissimos nesciunt? Voluptas natus provident veritatis corrupti ad vitae temporibus sunt aspernatur sapiente.
                <br />
                Odio in, maiores sunt adipisci iure eum? Culpa iusto itaque, at incidunt repellat accusantium consectetur, aspernatur animi laudantium inventore aliquid odio unde, earum optio sunt quas sequi explicabo voluptatum deleniti recusandae dolorum fugit eius? Animi iusto officia ab voluptas iste optio, obcaecati alias? Eius dolorem laboriosam distinctio officia molestiae molestias fugit quidem voluptatibus provident temporibus! Quod debitis dignissimos id sapiente rem placeat nisi, quasi maiores quos similique. 
                <br />
                Perspiciatis, dicta. Ipsam error dolore porro voluptatem. Repellat dolorem optio est a culpa! Ipsam pariatur voluptatum ea amet dolore doloribus consequuntur nostrum? Nam non excepturi aliquid eligendi! Ratione reiciendis id quia omnis esse ullam laborum harum! Quod quasi debitis soluta minus. Ab velit, itaque, quia ut quo sit dicta accusamus consequuntur modi voluptatibus ullam voluptas cumque illum corrupti tempore eius suscipit aperiam! Numquam vero harum, nobis porro iste ad similique nesciunt molestias vitae nostrum, illum eius excepturi qui esse officia voluptates repellendus tempore dolores provident dolore error obcaecati iure. Voluptatibus, placeat omnis! Quae architecto quam aperiam deleniti facilis, officiis odit?
            </p>
        </div>
    </section>
}