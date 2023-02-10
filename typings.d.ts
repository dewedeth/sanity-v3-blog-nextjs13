type Base = {
    _createAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updateAt: string;
};

interface Post extends Base {
    [x: string]: string | number | Date;
    author: Author;
    body: Block[];
    categories: Category;
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
}

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
 }

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}
