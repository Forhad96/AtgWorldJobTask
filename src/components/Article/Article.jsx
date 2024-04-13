import Container from "../Shared/Container";
import ArticleCard from "./ArticleCard";
import ArticleNav from "./ArticleNav";
import Location from "./Location";

const Article = () => {
  return (
    <Container>
      <ArticleNav />
      <hr />
      <div className="grid grid-cols-3 gap-8">
        <div className="md:col-span-2 col-span-3 ">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              author={article.author}
              views={article.views}
            />
          ))}
        </div>
        <div className="col-span-1 hidden md:block">
          <Location />
        </div>
      </div>
    </Container>
  );
};
export default Article;

const articles = [
  {
    id: 1,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
    author: "Sarthak Kamra",
    views: 1400,
  },
  {
    id: 2,
    title: "How to build a design system for better UI",
    description:
      "A design system is a collection of reusable components, guided by clear standards…",
    author: "John Doe",
    views: 2800,
  },
  {
    id: 3,
    title: "10 rules for mastering color in UI design",
    description:
      "Color is one of the most powerful tools in a designer's toolkit. It can evoke emotions…",
    author: "Jane Smith",
    views: 1200,
  },
  {
    id: 4,
    title: "The future of UI design: trends and predictions",
    description:
      "As technology continues to evolve, so too must the way we design user interfaces…",
    author: "Bob Johnson",
    views: 3500,
  },
  {
    id: 5,
    title: "How to create accessible and inclusive designs",
    description:
      "Accessibility and inclusivity are crucial aspects of modern UI design…",
    author: "Alice Williams",
    views: 1800,
  },
];
