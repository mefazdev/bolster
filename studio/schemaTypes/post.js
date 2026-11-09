import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      description: 'Used in the post URL, e.g. /blog/my-post. Click "Generate".',
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Your name",
      type: "string",
      description: "The student who wrote this post.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "grade",
      title: "Class / Course",
      type: "string",
      description: 'e.g. "Class 9", "Plus One", "BA English – 2nd year"',
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Campus Life", value: "campus-life" },
          { title: "Stories", value: "stories" },
          { title: "Poetry", value: "poetry" },
          { title: "Opinion", value: "opinion" },
          { title: "Science & Tech", value: "science-tech" },
          { title: "Art & Photos", value: "art-photos" },
          { title: "Reflections", value: "reflections" },
        ],
        layout: "radio",
      },
      initialValue: "campus-life",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string", description: "Describe the image for accessibility and SEO." }),
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Short summary",
      type: "text",
      rows: 3,
      description: "Shown on the blog list and in link previews.",
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: "body",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        }),
      ],
    }),
  ],
  orderings: [
    { title: "Newest first", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", author: "author", date: "publishedAt", media: "coverImage" },
    prepare: ({ title, author, date, media }) => ({
      title,
      subtitle: [author, date ? new Date(date).toLocaleDateString() : "No date"].filter(Boolean).join(" · "),
      media,
    }),
  },
});
