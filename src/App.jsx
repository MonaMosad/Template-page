import Section from "./components/Section";
import Header from "./components/Header";
import InfoBar from "./components/InfoBar";
import flower from "./assets/flower.png";
import NestedList from "./components/NestedList";
import image from "./assets/image.jpg";
import ImageGrid from "./components/ImageGrid";
import DataTable from "./components/DataTable";
import Footer from "./components/Footer";

export default function App() {
  const point =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

    const shortP="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." 
    const longP="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  const items = [
    {
      title: "First Main Title",
      subs: [
        { title: "Sub-Title", points: [point, point, point] },
        { title: "Sub-Title", points: [point, point, point] },
      ],
    },
    {
      title: "Second Main Title",
      subs: [{ title: "Sub-Title", points: [point, point, point] }],
    },
  ];
  const listItems = [point, point, point];


  const columns = ["Col 1", "Col 2", "Col 3"];

const rows1 = [
  ["Row 1", "123", "456"],
  ["Row 2", "123", "456"],
  ["Row 3", "123", "456"],
  ["Row 4", "123", "456"],
  ["Row 5", "123", "456"],
  ["Row 6", "123", "456"],
  ["Row 7", "123", "456"],
];
const rows2 = [
  ["Row 1", "123", "456"],
  ["Row 2", "123", "456"],
  ["Row 3", "123", "456"],
  ["Row 4", "123", "456"],
  ["Row 5", "123", "456"],
  ["Row 6", "123", "456"],

];
const rows3 = [
  ["Row 1", "123", "456"],
  ["Row 2", "123", "456"],
  ["Row 3", "123", "456"],
  ["Row 4", "123", "456"],
 
];

  return (
    <>
    <div className=" max-w-[1440px] mx-auto px-16">
      <Header />
      <InfoBar />
      <Section title="Section Name">
        <p className="mb-8 ">
       {longP}
        </p>

        <div className="flex gap-8 items-start">
          <p className="flex-1">
         {shortP}
          </p>
          <img
            src={flower}
            alt="Flower"
            className="w-[400px] h-[300px] object-cover rounded-lg"
          />
        </div>
      </Section>
      <Section title="Section 2nd Name">
        <div className="space-y-6">
          <p>
        {longP}
          </p>

          <img
            className="w-full h-[280px] object-cover rounded-2xl"
            src={flower}
            alt="Flower"
          />

          <p className=" font-bold text-black pt-2">title can be here</p>
          <p>
          {longP}
          </p>
        </div>
      </Section>

      <Section title="Another Section Long Name">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.{" "}
        </p>
        <NestedList title="Parent title here" items={items} />
      </Section>

      <Section title="Section Name can be here">
        <p>
        {longP}
        </p>
        <ImageGrid
          images={[image, image, image, image, image, image, image, image]}
        />
      </Section>

      <Section title="Section Name can be here">
        <p>
      {longP}
        </p>

        <ol className="list-decimal pl-5 space-y-1 mt-5">
          {listItems.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ol>
      </Section>

      <Section title="Section Name can be here">
        <p>{shortP}</p>
        <DataTable title="Title" columns={columns} rows={rows1}/>
      </Section>

      <Section title="Section Name can be here">
          <p>{shortP}</p>
        <DataTable title="Title" columns={columns} rows={rows2}  total={{ label: "Total Cost", value: "123,123.00 EGP" }}/>
      </Section>

      <Section title='Section Name can be here'>
        <p >{shortP}</p>
          <DataTable title="Title" columns={columns} rows={rows3}/>

      </Section>
        <div className="max-w-5xl mx-auto border-t border-gray-200 pt-12 pb-12">
          <p className="text-2xl leading-relaxed text-black">
            <strong>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </strong>{" "}
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English.
            </p>
          </div>    
        </div>
        <Footer text={shortP}/>
        </>
  ); 
}
