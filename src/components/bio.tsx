/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import { rhythm } from "@/utils";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: "flex",
        marginBottom: rhythm(2.5),
      }}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: "100%",
        }}
        imgStyle={{
          borderRadius: "50%",
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>, a senior software engineer{" "}
        <a href="https://www.dovetail.ie/">@Dovetail</a>. <br />
        🖖 Stay curious. <a href={`https://github.com/${social.github}`}>@GitHub</a>
      </p>
    </div>
  );
};

export default Bio;
