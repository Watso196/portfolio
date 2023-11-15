import * as React from "react";
import Nav from "../components/Nav";

const Blog = () => {
  return (
    <>
      <Nav />
      <main>
        <h1>Kalib&rsquo;s Blog</h1>
        <div role="tablist">
          <h2>Filter posts by tags</h2>
          <button role="tab" id="accessibility">
            Accessibility
          </button>
          <button role="tab" id="development">
            Development
          </button>
          <button role="tab" id="usability">
            Usability
          </button>
        </div>
        <section aria-label="blog posts" /*role log here?*/>
          <ul>
            <li>
              <article>
                <h3>Article title</h3>
                <p>January 1, 2024</p>
                <p>
                  Article description will go here! Should be maybe 1-2
                  sentences total?
                </p>
                <p>
                  <span>Accessibility</span>
                  <span>Development</span>
                </p>
              </article>
            </li>
            <li>
              <article>
                <h3>Article title</h3>
                <p>January 1, 2024</p>
                <p>
                  Article description will go here! Should be maybe 1-2
                  sentences total?
                </p>
                <p>
                  <span>Accessibility</span>
                  <span>Development</span>
                </p>
              </article>
            </li>
            <li>
              <article>
                <h3>Article title</h3>
                <p>January 1, 2024</p>
                <p>
                  Article description will go here! Should be maybe 1-2
                  sentences total?
                </p>
                <p>
                  <span>Accessibility</span>
                  <span>Development</span>
                </p>
              </article>
            </li>
            <li>
              <article>
                <h3>Article title</h3>
                <p>January 1, 2024</p>
                <p>
                  Article description will go here! Should be maybe 1-2
                  sentences total?
                </p>
                <p>
                  <span>Accessibility</span>
                  <span>Development</span>
                </p>
              </article>
            </li>
          </ul>
          <button type="button">Load More Articles</button>
        </section>
      </main>
    </>
  );
};

export default Blog;
