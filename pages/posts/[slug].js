import fs from 'fs'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export default function Post({ mdxSource }) {

  const frontmatter = mdxSource.frontmatter

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <main>
        <MDXRemote {...mdxSource} />
      </main>
    </>
  )
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts")

  // Generate a path for each one
  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(".mdx", "")
      }
    }
  })

  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const source = fs.readFileSync(`posts/${slug}.mdx`, 'utf-8');

    const mdxSource = await serialize(source, { parseFrontmatter: true })
    return { props: { mdxSource } }
  }