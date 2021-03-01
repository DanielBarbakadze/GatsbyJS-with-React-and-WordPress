/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.resolutions.base64'
  | 'childImageSharp.resolutions.tracedSVG'
  | 'childImageSharp.resolutions.aspectRatio'
  | 'childImageSharp.resolutions.width'
  | 'childImageSharp.resolutions.height'
  | 'childImageSharp.resolutions.src'
  | 'childImageSharp.resolutions.srcSet'
  | 'childImageSharp.resolutions.srcWebp'
  | 'childImageSharp.resolutions.srcSetWebp'
  | 'childImageSharp.resolutions.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.sizes.base64'
  | 'childImageSharp.sizes.tracedSVG'
  | 'childImageSharp.sizes.aspectRatio'
  | 'childImageSharp.sizes.src'
  | 'childImageSharp.sizes.srcSet'
  | 'childImageSharp.sizes.srcWebp'
  | 'childImageSharp.sizes.srcSetWebp'
  | 'childImageSharp.sizes.sizes'
  | 'childImageSharp.sizes.originalImg'
  | 'childImageSharp.sizes.originalName'
  | 'childImageSharp.sizes.presentationWidth'
  | 'childImageSharp.sizes.presentationHeight'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | 'NO_CHANGE'
  | 'jpg'
  | 'png'
  | 'webp';

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'resolutions.base64'
  | 'resolutions.tracedSVG'
  | 'resolutions.aspectRatio'
  | 'resolutions.width'
  | 'resolutions.height'
  | 'resolutions.src'
  | 'resolutions.srcSet'
  | 'resolutions.srcWebp'
  | 'resolutions.srcSetWebp'
  | 'resolutions.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'sizes.base64'
  | 'sizes.tracedSVG'
  | 'sizes.aspectRatio'
  | 'sizes.src'
  | 'sizes.srcSet'
  | 'sizes.srcWebp'
  | 'sizes.srcSetWebp'
  | 'sizes.sizes'
  | 'sizes.originalImg'
  | 'sizes.originalName'
  | 'sizes.presentationWidth'
  | 'sizes.presentationHeight'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly wordpressAcfOptions: Maybe<wordpress__acf_options>;
  readonly allWordpressAcfOptions: wordpress__acf_optionsConnection;
  readonly wordpressWpUsers: Maybe<wordpress__wp_users>;
  readonly allWordpressWpUsers: wordpress__wp_usersConnection;
  readonly wordpressCategory: Maybe<wordpress__CATEGORY>;
  readonly allWordpressCategory: wordpress__CATEGORYConnection;
  readonly wordpressWpTaxonomies: Maybe<wordpress__wp_taxonomies>;
  readonly allWordpressWpTaxonomies: wordpress__wp_taxonomiesConnection;
  readonly wordpressPage: Maybe<wordpress__PAGE>;
  readonly allWordpressPage: wordpress__PAGEConnection;
  readonly wordpressPost: Maybe<wordpress__POST>;
  readonly allWordpressPost: wordpress__POSTConnection;
  readonly wordpressWpApiMenusMenusItems: Maybe<wordpress__wp_api_menus_menus_items>;
  readonly allWordpressWpApiMenusMenusItems: wordpress__wp_api_menus_menus_itemsConnection;
  readonly wordpressWpApiMenusMenus: Maybe<wordpress__wp_api_menus_menus>;
  readonly allWordpressWpApiMenusMenus: wordpress__wp_api_menus_menusConnection;
  readonly wordpressAcfUsers: Maybe<wordpress__acf_users>;
  readonly allWordpressAcfUsers: wordpress__acf_usersConnection;
  readonly wordpressAcfCategories: Maybe<wordpress__acf_categories>;
  readonly allWordpressAcfCategories: wordpress__acf_categoriesConnection;
  readonly wordpressAcfPages: Maybe<wordpress__acf_pages>;
  readonly allWordpressAcfPages: wordpress__acf_pagesConnection;
  readonly wordpressAcfPosts: Maybe<wordpress__acf_posts>;
  readonly allWordpressAcfPosts: wordpress__acf_postsConnection;
  readonly wordpressSiteMetadata: Maybe<wordpress__site_metadata>;
  readonly allWordpressSiteMetadata: wordpress__site_metadataConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressAcfOptionsArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<StringQueryOperatorInput>;
};


type Query_allWordpressAcfOptionsArgs = {
  filter: Maybe<wordpress__acf_optionsFilterInput>;
  sort: Maybe<wordpress__acf_optionsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressWpUsersArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  avatar_urls: Maybe<wordpress__wp_usersAvatar_urlsFilterInput>;
  _links: Maybe<wordpress__wp_users_linksFilterInput>;
  authored_wordpress__POST: Maybe<wordpress__POSTFilterListInput>;
  authored_wordpress__PAGE: Maybe<wordpress__PAGEFilterListInput>;
  path: Maybe<StringQueryOperatorInput>;
};


type Query_allWordpressWpUsersArgs = {
  filter: Maybe<wordpress__wp_usersFilterInput>;
  sort: Maybe<wordpress__wp_usersSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressCategoryArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
  count: Maybe<IntQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  wordpress_parent: Maybe<IntQueryOperatorInput>;
  _links: Maybe<wordpress__CATEGORY_linksFilterInput>;
  taxonomy: Maybe<wordpress__wp_taxonomiesFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
};


type Query_allWordpressCategoryArgs = {
  filter: Maybe<wordpress__CATEGORYFilterInput>;
  sort: Maybe<wordpress__CATEGORYSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressWpTaxonomiesArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  types: Maybe<StringQueryOperatorInput>;
  hierarchical: Maybe<BooleanQueryOperatorInput>;
  rest_base: Maybe<StringQueryOperatorInput>;
  _links: Maybe<wordpress__wp_taxonomies_linksFilterInput>;
};


type Query_allWordpressWpTaxonomiesArgs = {
  filter: Maybe<wordpress__wp_taxonomiesFilterInput>;
  sort: Maybe<wordpress__wp_taxonomiesSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressPageArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  guid: Maybe<StringQueryOperatorInput>;
  modified: Maybe<DateQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  status: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  content: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  wordpress_parent: Maybe<IntQueryOperatorInput>;
  menu_order: Maybe<IntQueryOperatorInput>;
  comment_status: Maybe<StringQueryOperatorInput>;
  ping_status: Maybe<StringQueryOperatorInput>;
  template: Maybe<StringQueryOperatorInput>;
  _links: Maybe<wordpress__PAGE_linksFilterInput>;
  author: Maybe<wordpress__wp_usersFilterInput>;
  parent_element: Maybe<wordpress__PAGEFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  acf: Maybe<wordpress__PAGEAcfFilterInput>;
};


type Query_allWordpressPageArgs = {
  filter: Maybe<wordpress__PAGEFilterInput>;
  sort: Maybe<wordpress__PAGESortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressPostArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  guid: Maybe<StringQueryOperatorInput>;
  modified: Maybe<DateQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  status: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  link: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  content: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  comment_status: Maybe<StringQueryOperatorInput>;
  ping_status: Maybe<StringQueryOperatorInput>;
  sticky: Maybe<BooleanQueryOperatorInput>;
  template: Maybe<StringQueryOperatorInput>;
  format: Maybe<StringQueryOperatorInput>;
  _links: Maybe<wordpress__POST_linksFilterInput>;
  author: Maybe<wordpress__wp_usersFilterInput>;
  categories: Maybe<wordpress__CATEGORYFilterListInput>;
  path: Maybe<StringQueryOperatorInput>;
};


type Query_allWordpressPostArgs = {
  filter: Maybe<wordpress__POSTFilterInput>;
  sort: Maybe<wordpress__POSTSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressWpApiMenusMenusItemsArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  count: Maybe<IntQueryOperatorInput>;
  items: Maybe<wordpress__wp_api_menus_menus_itemsItemsFilterListInput>;
  meta: Maybe<wordpress__wp_api_menus_menus_itemsMetaFilterInput>;
};


type Query_allWordpressWpApiMenusMenusItemsArgs = {
  filter: Maybe<wordpress__wp_api_menus_menus_itemsFilterInput>;
  sort: Maybe<wordpress__wp_api_menus_menus_itemsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressWpApiMenusMenusArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  term_id: Maybe<IntQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  term_group: Maybe<IntQueryOperatorInput>;
  term_taxonomy_id: Maybe<IntQueryOperatorInput>;
  taxonomy: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  wordpress_parent: Maybe<IntQueryOperatorInput>;
  count: Maybe<IntQueryOperatorInput>;
  filter: Maybe<StringQueryOperatorInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
  meta: Maybe<wordpress__wp_api_menus_menusMetaFilterInput>;
};


type Query_allWordpressWpApiMenusMenusArgs = {
  filter: Maybe<wordpress__wp_api_menus_menusFilterInput>;
  sort: Maybe<wordpress__wp_api_menus_menusSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressAcfUsersArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
};


type Query_allWordpressAcfUsersArgs = {
  filter: Maybe<wordpress__acf_usersFilterInput>;
  sort: Maybe<wordpress__acf_usersSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressAcfCategoriesArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
};


type Query_allWordpressAcfCategoriesArgs = {
  filter: Maybe<wordpress__acf_categoriesFilterInput>;
  sort: Maybe<wordpress__acf_categoriesSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressAcfPagesArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
  acf: Maybe<wordpress__acf_pagesAcfFilterInput>;
};


type Query_allWordpressAcfPagesArgs = {
  filter: Maybe<wordpress__acf_pagesFilterInput>;
  sort: Maybe<wordpress__acf_pagesSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressAcfPostsArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  wordpress_id: Maybe<IntQueryOperatorInput>;
};


type Query_allWordpressAcfPostsArgs = {
  filter: Maybe<wordpress__acf_postsFilterInput>;
  sort: Maybe<wordpress__acf_postsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_wordpressSiteMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  home: Maybe<StringQueryOperatorInput>;
};


type Query_allWordpressSiteMetadataArgs = {
  filter: Maybe<wordpress__site_metadataFilterInput>;
  sort: Maybe<wordpress__site_metadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly data: Maybe<SitePageContextData>;
  readonly footerMenuObjectIds: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly headerMenuObjectIds: Maybe<Scalars['String']>;
};

type SitePageContextData = {
  readonly id: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
  readonly template: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly content: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly footerMenuItems: Maybe<SitePageContextDataFooterMenuItems>;
  readonly headerMenuItems: Maybe<SitePageContextDataHeaderMenuItems>;
  readonly format: Maybe<Scalars['String']>;
  readonly acf: Maybe<SitePageContextDataAcf>;
};

type SitePageContextDataAcf = {
  readonly github: Maybe<Scalars['String']>;
};

type SitePageContextDataAcfFilterInput = {
  readonly github: Maybe<StringQueryOperatorInput>;
};

type SitePageContextDataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly footerMenuItems: Maybe<SitePageContextDataFooterMenuItemsFilterInput>;
  readonly headerMenuItems: Maybe<SitePageContextDataHeaderMenuItemsFilterInput>;
  readonly format: Maybe<StringQueryOperatorInput>;
  readonly acf: Maybe<SitePageContextDataAcfFilterInput>;
};

type SitePageContextDataFooterMenuItems = {
  readonly edges: Maybe<ReadonlyArray<Maybe<SitePageContextDataFooterMenuItemsEdges>>>;
};

type SitePageContextDataFooterMenuItemsEdges = {
  readonly node: Maybe<SitePageContextDataFooterMenuItemsEdgesNode>;
};

type SitePageContextDataFooterMenuItemsEdgesFilterInput = {
  readonly node: Maybe<SitePageContextDataFooterMenuItemsEdgesNodeFilterInput>;
};

type SitePageContextDataFooterMenuItemsEdgesFilterListInput = {
  readonly elemMatch: Maybe<SitePageContextDataFooterMenuItemsEdgesFilterInput>;
};

type SitePageContextDataFooterMenuItemsEdgesNode = {
  readonly id: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
};

type SitePageContextDataFooterMenuItemsEdgesNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type SitePageContextDataFooterMenuItemsFilterInput = {
  readonly edges: Maybe<SitePageContextDataFooterMenuItemsEdgesFilterListInput>;
};

type SitePageContextDataHeaderMenuItems = {
  readonly edges: Maybe<ReadonlyArray<Maybe<SitePageContextDataHeaderMenuItemsEdges>>>;
};

type SitePageContextDataHeaderMenuItemsEdges = {
  readonly node: Maybe<SitePageContextDataHeaderMenuItemsEdgesNode>;
};

type SitePageContextDataHeaderMenuItemsEdgesFilterInput = {
  readonly node: Maybe<SitePageContextDataHeaderMenuItemsEdgesNodeFilterInput>;
};

type SitePageContextDataHeaderMenuItemsEdgesFilterListInput = {
  readonly elemMatch: Maybe<SitePageContextDataHeaderMenuItemsEdgesFilterInput>;
};

type SitePageContextDataHeaderMenuItemsEdgesNode = {
  readonly id: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
};

type SitePageContextDataHeaderMenuItemsEdgesNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type SitePageContextDataHeaderMenuItemsFilterInput = {
  readonly edges: Maybe<SitePageContextDataHeaderMenuItemsEdgesFilterListInput>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<SitePageContextDataFilterInput>;
  readonly footerMenuObjectIds: Maybe<IntQueryOperatorInput>;
  readonly headerMenuObjectIds: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.id'
  | 'context.data.id'
  | 'context.data.path'
  | 'context.data.status'
  | 'context.data.template'
  | 'context.data.title'
  | 'context.data.content'
  | 'context.data.slug'
  | 'context.data.footerMenuItems.edges'
  | 'context.data.headerMenuItems.edges'
  | 'context.data.format'
  | 'context.data.acf.github'
  | 'context.footerMenuObjectIds'
  | 'context.headerMenuObjectIds'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.language'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.minimizeDeprecationNotice'
  | 'pluginCreator.pluginOptions.baseUrl'
  | 'pluginCreator.pluginOptions.hostingWPCOM'
  | 'pluginCreator.pluginOptions.useACF'
  | 'pluginCreator.pluginOptions.verboseOutput'
  | 'pluginCreator.pluginOptions.perPage'
  | 'pluginCreator.pluginOptions.concurrentRequests'
  | 'pluginCreator.pluginOptions.includedRoutes'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'componentPath';

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.language'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.minimizeDeprecationNotice'
  | 'pluginOptions.baseUrl'
  | 'pluginOptions.hostingWPCOM'
  | 'pluginOptions.useACF'
  | 'pluginOptions.verboseOutput'
  | 'pluginOptions.perPage'
  | 'pluginOptions.concurrentRequests'
  | 'pluginOptions.includedRoutes'
  | 'pluginOptions.pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly language: Maybe<Scalars['String']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly minimizeDeprecationNotice: Maybe<Scalars['Boolean']>;
  readonly baseUrl: Maybe<Scalars['String']>;
  readonly hostingWPCOM: Maybe<Scalars['Boolean']>;
  readonly useACF: Maybe<Scalars['Boolean']>;
  readonly verboseOutput: Maybe<Scalars['Boolean']>;
  readonly perPage: Maybe<Scalars['Int']>;
  readonly concurrentRequests: Maybe<Scalars['Int']>;
  readonly includedRoutes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_introspection_json: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_introspection_json: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly language: Maybe<StringQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly minimizeDeprecationNotice: Maybe<BooleanQueryOperatorInput>;
  readonly baseUrl: Maybe<StringQueryOperatorInput>;
  readonly hostingWPCOM: Maybe<BooleanQueryOperatorInput>;
  readonly useACF: Maybe<BooleanQueryOperatorInput>;
  readonly verboseOutput: Maybe<BooleanQueryOperatorInput>;
  readonly perPage: Maybe<IntQueryOperatorInput>;
  readonly concurrentRequests: Maybe<IntQueryOperatorInput>;
  readonly includedRoutes: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type wordpress__acf_categories = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['Int']>;
};

type wordpress__acf_categoriesConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_categoriesEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_categories>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__acf_categoriesGroupConnection>;
};


type wordpress__acf_categoriesConnection_distinctArgs = {
  field: wordpress__acf_categoriesFieldsEnum;
};


type wordpress__acf_categoriesConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__acf_categoriesFieldsEnum;
};

type wordpress__acf_categoriesEdge = {
  readonly next: Maybe<wordpress__acf_categories>;
  readonly node: wordpress__acf_categories;
  readonly previous: Maybe<wordpress__acf_categories>;
};

type wordpress__acf_categoriesFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id';

type wordpress__acf_categoriesFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
};

type wordpress__acf_categoriesGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_categoriesEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_categories>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__acf_categoriesSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__acf_categoriesFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__acf_options = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['String']>;
};

type wordpress__acf_optionsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_optionsEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_options>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__acf_optionsGroupConnection>;
};


type wordpress__acf_optionsConnection_distinctArgs = {
  field: wordpress__acf_optionsFieldsEnum;
};


type wordpress__acf_optionsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__acf_optionsFieldsEnum;
};

type wordpress__acf_optionsEdge = {
  readonly next: Maybe<wordpress__acf_options>;
  readonly node: wordpress__acf_options;
  readonly previous: Maybe<wordpress__acf_options>;
};

type wordpress__acf_optionsFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id';

type wordpress__acf_optionsFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<StringQueryOperatorInput>;
};

type wordpress__acf_optionsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_optionsEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_options>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__acf_optionsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__acf_optionsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__acf_pages = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['Int']>;
  readonly acf: Maybe<wordpress__acf_pagesAcf>;
};

type wordpress__acf_pagesAcf = {
  readonly github: Maybe<Scalars['String']>;
};

type wordpress__acf_pagesAcfFilterInput = {
  readonly github: Maybe<StringQueryOperatorInput>;
};

type wordpress__acf_pagesConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_pagesEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_pages>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__acf_pagesGroupConnection>;
};


type wordpress__acf_pagesConnection_distinctArgs = {
  field: wordpress__acf_pagesFieldsEnum;
};


type wordpress__acf_pagesConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__acf_pagesFieldsEnum;
};

type wordpress__acf_pagesEdge = {
  readonly next: Maybe<wordpress__acf_pages>;
  readonly node: wordpress__acf_pages;
  readonly previous: Maybe<wordpress__acf_pages>;
};

type wordpress__acf_pagesFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id'
  | 'acf.github';

type wordpress__acf_pagesFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
  readonly acf: Maybe<wordpress__acf_pagesAcfFilterInput>;
};

type wordpress__acf_pagesGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_pagesEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_pages>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__acf_pagesSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__acf_pagesFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__acf_posts = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['Int']>;
};

type wordpress__acf_postsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_postsEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_posts>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__acf_postsGroupConnection>;
};


type wordpress__acf_postsConnection_distinctArgs = {
  field: wordpress__acf_postsFieldsEnum;
};


type wordpress__acf_postsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__acf_postsFieldsEnum;
};

type wordpress__acf_postsEdge = {
  readonly next: Maybe<wordpress__acf_posts>;
  readonly node: wordpress__acf_posts;
  readonly previous: Maybe<wordpress__acf_posts>;
};

type wordpress__acf_postsFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id';

type wordpress__acf_postsFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
};

type wordpress__acf_postsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_postsEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_posts>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__acf_postsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__acf_postsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__acf_users = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['Int']>;
};

type wordpress__acf_usersConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_usersEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_users>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__acf_usersGroupConnection>;
};


type wordpress__acf_usersConnection_distinctArgs = {
  field: wordpress__acf_usersFieldsEnum;
};


type wordpress__acf_usersConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__acf_usersFieldsEnum;
};

type wordpress__acf_usersEdge = {
  readonly next: Maybe<wordpress__acf_users>;
  readonly node: wordpress__acf_users;
  readonly previous: Maybe<wordpress__acf_users>;
};

type wordpress__acf_usersFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id';

type wordpress__acf_usersFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
};

type wordpress__acf_usersGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__acf_usersEdge>;
  readonly nodes: ReadonlyArray<wordpress__acf_users>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__acf_usersSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__acf_usersFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__CATEGORY = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['Int']>;
  readonly count: Maybe<Scalars['Int']>;
  readonly description: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly wordpress_parent: Maybe<Scalars['Int']>;
  readonly _links: Maybe<wordpress__CATEGORY_links>;
  readonly taxonomy: Maybe<wordpress__wp_taxonomies>;
  readonly path: Maybe<Scalars['String']>;
};

type wordpress__CATEGORY_links = {
  readonly self: Maybe<ReadonlyArray<Maybe<wordpress__CATEGORY_linksSelf>>>;
  readonly collection: Maybe<ReadonlyArray<Maybe<wordpress__CATEGORY_linksCollection>>>;
  readonly about: Maybe<ReadonlyArray<Maybe<wordpress__CATEGORY_linksAbout>>>;
  readonly wp_post_type: Maybe<ReadonlyArray<Maybe<wordpress__CATEGORY_linksWp_post_type>>>;
  readonly curies: Maybe<ReadonlyArray<Maybe<wordpress__CATEGORY_linksCuries>>>;
};

type wordpress__CATEGORY_linksAbout = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__CATEGORY_linksAboutFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__CATEGORY_linksAboutFilterListInput = {
  readonly elemMatch: Maybe<wordpress__CATEGORY_linksAboutFilterInput>;
};

type wordpress__CATEGORY_linksCollection = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__CATEGORY_linksCollectionFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__CATEGORY_linksCollectionFilterListInput = {
  readonly elemMatch: Maybe<wordpress__CATEGORY_linksCollectionFilterInput>;
};

type wordpress__CATEGORY_linksCuries = {
  readonly name: Maybe<Scalars['String']>;
  readonly href: Maybe<Scalars['String']>;
  readonly templated: Maybe<Scalars['Boolean']>;
};

type wordpress__CATEGORY_linksCuriesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly templated: Maybe<BooleanQueryOperatorInput>;
};

type wordpress__CATEGORY_linksCuriesFilterListInput = {
  readonly elemMatch: Maybe<wordpress__CATEGORY_linksCuriesFilterInput>;
};

type wordpress__CATEGORY_linksFilterInput = {
  readonly self: Maybe<wordpress__CATEGORY_linksSelfFilterListInput>;
  readonly collection: Maybe<wordpress__CATEGORY_linksCollectionFilterListInput>;
  readonly about: Maybe<wordpress__CATEGORY_linksAboutFilterListInput>;
  readonly wp_post_type: Maybe<wordpress__CATEGORY_linksWp_post_typeFilterListInput>;
  readonly curies: Maybe<wordpress__CATEGORY_linksCuriesFilterListInput>;
};

type wordpress__CATEGORY_linksSelf = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__CATEGORY_linksSelfFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__CATEGORY_linksSelfFilterListInput = {
  readonly elemMatch: Maybe<wordpress__CATEGORY_linksSelfFilterInput>;
};

type wordpress__CATEGORY_linksWp_post_type = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__CATEGORY_linksWp_post_typeFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__CATEGORY_linksWp_post_typeFilterListInput = {
  readonly elemMatch: Maybe<wordpress__CATEGORY_linksWp_post_typeFilterInput>;
};

type wordpress__CATEGORYConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__CATEGORYEdge>;
  readonly nodes: ReadonlyArray<wordpress__CATEGORY>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__CATEGORYGroupConnection>;
};


type wordpress__CATEGORYConnection_distinctArgs = {
  field: wordpress__CATEGORYFieldsEnum;
};


type wordpress__CATEGORYConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__CATEGORYFieldsEnum;
};

type wordpress__CATEGORYEdge = {
  readonly next: Maybe<wordpress__CATEGORY>;
  readonly node: wordpress__CATEGORY;
  readonly previous: Maybe<wordpress__CATEGORY>;
};

type wordpress__CATEGORYFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id'
  | 'count'
  | 'description'
  | 'link'
  | 'name'
  | 'slug'
  | 'wordpress_parent'
  | '_links.self'
  | '_links.self.href'
  | '_links.collection'
  | '_links.collection.href'
  | '_links.about'
  | '_links.about.href'
  | '_links.wp_post_type'
  | '_links.wp_post_type.href'
  | '_links.curies'
  | '_links.curies.name'
  | '_links.curies.href'
  | '_links.curies.templated'
  | 'taxonomy.id'
  | 'taxonomy.parent.id'
  | 'taxonomy.parent.parent.id'
  | 'taxonomy.parent.parent.children'
  | 'taxonomy.parent.children'
  | 'taxonomy.parent.children.id'
  | 'taxonomy.parent.children.children'
  | 'taxonomy.parent.internal.content'
  | 'taxonomy.parent.internal.contentDigest'
  | 'taxonomy.parent.internal.description'
  | 'taxonomy.parent.internal.fieldOwners'
  | 'taxonomy.parent.internal.ignoreType'
  | 'taxonomy.parent.internal.mediaType'
  | 'taxonomy.parent.internal.owner'
  | 'taxonomy.parent.internal.type'
  | 'taxonomy.children'
  | 'taxonomy.children.id'
  | 'taxonomy.children.parent.id'
  | 'taxonomy.children.parent.children'
  | 'taxonomy.children.children'
  | 'taxonomy.children.children.id'
  | 'taxonomy.children.children.children'
  | 'taxonomy.children.internal.content'
  | 'taxonomy.children.internal.contentDigest'
  | 'taxonomy.children.internal.description'
  | 'taxonomy.children.internal.fieldOwners'
  | 'taxonomy.children.internal.ignoreType'
  | 'taxonomy.children.internal.mediaType'
  | 'taxonomy.children.internal.owner'
  | 'taxonomy.children.internal.type'
  | 'taxonomy.internal.content'
  | 'taxonomy.internal.contentDigest'
  | 'taxonomy.internal.description'
  | 'taxonomy.internal.fieldOwners'
  | 'taxonomy.internal.ignoreType'
  | 'taxonomy.internal.mediaType'
  | 'taxonomy.internal.owner'
  | 'taxonomy.internal.type'
  | 'taxonomy.wordpress_id'
  | 'taxonomy.name'
  | 'taxonomy.slug'
  | 'taxonomy.description'
  | 'taxonomy.types'
  | 'taxonomy.hierarchical'
  | 'taxonomy.rest_base'
  | 'taxonomy._links.collection'
  | 'taxonomy._links.collection.href'
  | 'taxonomy._links.wp_items'
  | 'taxonomy._links.wp_items.href'
  | 'taxonomy._links.curies'
  | 'taxonomy._links.curies.name'
  | 'taxonomy._links.curies.href'
  | 'taxonomy._links.curies.templated'
  | 'path';

type wordpress__CATEGORYFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly wordpress_parent: Maybe<IntQueryOperatorInput>;
  readonly _links: Maybe<wordpress__CATEGORY_linksFilterInput>;
  readonly taxonomy: Maybe<wordpress__wp_taxonomiesFilterInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
};

type wordpress__CATEGORYFilterListInput = {
  readonly elemMatch: Maybe<wordpress__CATEGORYFilterInput>;
};

type wordpress__CATEGORYGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__CATEGORYEdge>;
  readonly nodes: ReadonlyArray<wordpress__CATEGORY>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__CATEGORYSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__CATEGORYFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__PAGE = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['Int']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly guid: Maybe<Scalars['String']>;
  readonly modified: Maybe<Scalars['Date']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly content: Maybe<Scalars['String']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly wordpress_parent: Maybe<Scalars['Int']>;
  readonly menu_order: Maybe<Scalars['Int']>;
  readonly comment_status: Maybe<Scalars['String']>;
  readonly ping_status: Maybe<Scalars['String']>;
  readonly template: Maybe<Scalars['String']>;
  readonly _links: Maybe<wordpress__PAGE_links>;
  readonly author: Maybe<wordpress__wp_users>;
  readonly parent_element: Maybe<wordpress__PAGE>;
  readonly path: Maybe<Scalars['String']>;
  readonly acf: Maybe<wordpress__PAGEAcf>;
};


type wordpress__PAGE_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type wordpress__PAGE_modifiedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type wordpress__PAGE_links = {
  readonly self: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksSelf>>>;
  readonly collection: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksCollection>>>;
  readonly about: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksAbout>>>;
  readonly author: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksAuthor>>>;
  readonly replies: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksReplies>>>;
  readonly version_history: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksVersion_history>>>;
  readonly predecessor_version: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksPredecessor_version>>>;
  readonly up: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksUp>>>;
  readonly wp_attachment: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksWp_attachment>>>;
  readonly curies: Maybe<ReadonlyArray<Maybe<wordpress__PAGE_linksCuries>>>;
};

type wordpress__PAGE_linksAbout = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__PAGE_linksAboutFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGE_linksAboutFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksAboutFilterInput>;
};

type wordpress__PAGE_linksAuthor = {
  readonly embeddable: Maybe<Scalars['Boolean']>;
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__PAGE_linksAuthorFilterInput = {
  readonly embeddable: Maybe<BooleanQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGE_linksAuthorFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksAuthorFilterInput>;
};

type wordpress__PAGE_linksCollection = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__PAGE_linksCollectionFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGE_linksCollectionFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksCollectionFilterInput>;
};

type wordpress__PAGE_linksCuries = {
  readonly name: Maybe<Scalars['String']>;
  readonly href: Maybe<Scalars['String']>;
  readonly templated: Maybe<Scalars['Boolean']>;
};

type wordpress__PAGE_linksCuriesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly templated: Maybe<BooleanQueryOperatorInput>;
};

type wordpress__PAGE_linksCuriesFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksCuriesFilterInput>;
};

type wordpress__PAGE_linksFilterInput = {
  readonly self: Maybe<wordpress__PAGE_linksSelfFilterListInput>;
  readonly collection: Maybe<wordpress__PAGE_linksCollectionFilterListInput>;
  readonly about: Maybe<wordpress__PAGE_linksAboutFilterListInput>;
  readonly author: Maybe<wordpress__PAGE_linksAuthorFilterListInput>;
  readonly replies: Maybe<wordpress__PAGE_linksRepliesFilterListInput>;
  readonly version_history: Maybe<wordpress__PAGE_linksVersion_historyFilterListInput>;
  readonly predecessor_version: Maybe<wordpress__PAGE_linksPredecessor_versionFilterListInput>;
  readonly up: Maybe<wordpress__PAGE_linksUpFilterListInput>;
  readonly wp_attachment: Maybe<wordpress__PAGE_linksWp_attachmentFilterListInput>;
  readonly curies: Maybe<wordpress__PAGE_linksCuriesFilterListInput>;
};

type wordpress__PAGE_linksPredecessor_version = {
  readonly wordpress_id: Maybe<Scalars['Int']>;
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__PAGE_linksPredecessor_versionFilterInput = {
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGE_linksPredecessor_versionFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksPredecessor_versionFilterInput>;
};

type wordpress__PAGE_linksReplies = {
  readonly embeddable: Maybe<Scalars['Boolean']>;
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__PAGE_linksRepliesFilterInput = {
  readonly embeddable: Maybe<BooleanQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGE_linksRepliesFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksRepliesFilterInput>;
};

type wordpress__PAGE_linksSelf = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__PAGE_linksSelfFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGE_linksSelfFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksSelfFilterInput>;
};

type wordpress__PAGE_linksUp = {
  readonly embeddable: Maybe<Scalars['Boolean']>;
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__PAGE_linksUpFilterInput = {
  readonly embeddable: Maybe<BooleanQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGE_linksUpFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksUpFilterInput>;
};

type wordpress__PAGE_linksVersion_history = {
  readonly count: Maybe<Scalars['Int']>;
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__PAGE_linksVersion_historyFilterInput = {
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGE_linksVersion_historyFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksVersion_historyFilterInput>;
};

type wordpress__PAGE_linksWp_attachment = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__PAGE_linksWp_attachmentFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGE_linksWp_attachmentFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGE_linksWp_attachmentFilterInput>;
};

type wordpress__PAGEAcf = {
  readonly github: Maybe<Scalars['String']>;
};

type wordpress__PAGEAcfFilterInput = {
  readonly github: Maybe<StringQueryOperatorInput>;
};

type wordpress__PAGEConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__PAGEEdge>;
  readonly nodes: ReadonlyArray<wordpress__PAGE>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__PAGEGroupConnection>;
};


type wordpress__PAGEConnection_distinctArgs = {
  field: wordpress__PAGEFieldsEnum;
};


type wordpress__PAGEConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__PAGEFieldsEnum;
};

type wordpress__PAGEEdge = {
  readonly next: Maybe<wordpress__PAGE>;
  readonly node: wordpress__PAGE;
  readonly previous: Maybe<wordpress__PAGE>;
};

type wordpress__PAGEFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id'
  | 'date'
  | 'guid'
  | 'modified'
  | 'slug'
  | 'status'
  | 'type'
  | 'link'
  | 'title'
  | 'content'
  | 'excerpt'
  | 'wordpress_parent'
  | 'menu_order'
  | 'comment_status'
  | 'ping_status'
  | 'template'
  | '_links.self'
  | '_links.self.href'
  | '_links.collection'
  | '_links.collection.href'
  | '_links.about'
  | '_links.about.href'
  | '_links.author'
  | '_links.author.embeddable'
  | '_links.author.href'
  | '_links.replies'
  | '_links.replies.embeddable'
  | '_links.replies.href'
  | '_links.version_history'
  | '_links.version_history.count'
  | '_links.version_history.href'
  | '_links.predecessor_version'
  | '_links.predecessor_version.wordpress_id'
  | '_links.predecessor_version.href'
  | '_links.up'
  | '_links.up.embeddable'
  | '_links.up.href'
  | '_links.wp_attachment'
  | '_links.wp_attachment.href'
  | '_links.curies'
  | '_links.curies.name'
  | '_links.curies.href'
  | '_links.curies.templated'
  | 'author.id'
  | 'author.parent.id'
  | 'author.parent.parent.id'
  | 'author.parent.parent.children'
  | 'author.parent.children'
  | 'author.parent.children.id'
  | 'author.parent.children.children'
  | 'author.parent.internal.content'
  | 'author.parent.internal.contentDigest'
  | 'author.parent.internal.description'
  | 'author.parent.internal.fieldOwners'
  | 'author.parent.internal.ignoreType'
  | 'author.parent.internal.mediaType'
  | 'author.parent.internal.owner'
  | 'author.parent.internal.type'
  | 'author.children'
  | 'author.children.id'
  | 'author.children.parent.id'
  | 'author.children.parent.children'
  | 'author.children.children'
  | 'author.children.children.id'
  | 'author.children.children.children'
  | 'author.children.internal.content'
  | 'author.children.internal.contentDigest'
  | 'author.children.internal.description'
  | 'author.children.internal.fieldOwners'
  | 'author.children.internal.ignoreType'
  | 'author.children.internal.mediaType'
  | 'author.children.internal.owner'
  | 'author.children.internal.type'
  | 'author.internal.content'
  | 'author.internal.contentDigest'
  | 'author.internal.description'
  | 'author.internal.fieldOwners'
  | 'author.internal.ignoreType'
  | 'author.internal.mediaType'
  | 'author.internal.owner'
  | 'author.internal.type'
  | 'author.wordpress_id'
  | 'author.name'
  | 'author.url'
  | 'author.description'
  | 'author.link'
  | 'author.slug'
  | 'author.avatar_urls.wordpress_24'
  | 'author.avatar_urls.wordpress_48'
  | 'author.avatar_urls.wordpress_96'
  | 'author._links.self'
  | 'author._links.self.href'
  | 'author._links.collection'
  | 'author._links.collection.href'
  | 'author.authored_wordpress__POST'
  | 'author.authored_wordpress__POST.id'
  | 'author.authored_wordpress__POST.parent.id'
  | 'author.authored_wordpress__POST.parent.children'
  | 'author.authored_wordpress__POST.children'
  | 'author.authored_wordpress__POST.children.id'
  | 'author.authored_wordpress__POST.children.children'
  | 'author.authored_wordpress__POST.internal.content'
  | 'author.authored_wordpress__POST.internal.contentDigest'
  | 'author.authored_wordpress__POST.internal.description'
  | 'author.authored_wordpress__POST.internal.fieldOwners'
  | 'author.authored_wordpress__POST.internal.ignoreType'
  | 'author.authored_wordpress__POST.internal.mediaType'
  | 'author.authored_wordpress__POST.internal.owner'
  | 'author.authored_wordpress__POST.internal.type'
  | 'author.authored_wordpress__POST.wordpress_id'
  | 'author.authored_wordpress__POST.date'
  | 'author.authored_wordpress__POST.guid'
  | 'author.authored_wordpress__POST.modified'
  | 'author.authored_wordpress__POST.slug'
  | 'author.authored_wordpress__POST.status'
  | 'author.authored_wordpress__POST.type'
  | 'author.authored_wordpress__POST.link'
  | 'author.authored_wordpress__POST.title'
  | 'author.authored_wordpress__POST.content'
  | 'author.authored_wordpress__POST.excerpt'
  | 'author.authored_wordpress__POST.comment_status'
  | 'author.authored_wordpress__POST.ping_status'
  | 'author.authored_wordpress__POST.sticky'
  | 'author.authored_wordpress__POST.template'
  | 'author.authored_wordpress__POST.format'
  | 'author.authored_wordpress__POST._links.self'
  | 'author.authored_wordpress__POST._links.collection'
  | 'author.authored_wordpress__POST._links.about'
  | 'author.authored_wordpress__POST._links.author'
  | 'author.authored_wordpress__POST._links.replies'
  | 'author.authored_wordpress__POST._links.version_history'
  | 'author.authored_wordpress__POST._links.wp_attachment'
  | 'author.authored_wordpress__POST._links.wp_term'
  | 'author.authored_wordpress__POST._links.curies'
  | 'author.authored_wordpress__POST.author.id'
  | 'author.authored_wordpress__POST.author.children'
  | 'author.authored_wordpress__POST.author.wordpress_id'
  | 'author.authored_wordpress__POST.author.name'
  | 'author.authored_wordpress__POST.author.url'
  | 'author.authored_wordpress__POST.author.description'
  | 'author.authored_wordpress__POST.author.link'
  | 'author.authored_wordpress__POST.author.slug'
  | 'author.authored_wordpress__POST.author.authored_wordpress__POST'
  | 'author.authored_wordpress__POST.author.authored_wordpress__PAGE'
  | 'author.authored_wordpress__POST.author.path'
  | 'author.authored_wordpress__POST.categories'
  | 'author.authored_wordpress__POST.categories.id'
  | 'author.authored_wordpress__POST.categories.children'
  | 'author.authored_wordpress__POST.categories.wordpress_id'
  | 'author.authored_wordpress__POST.categories.count'
  | 'author.authored_wordpress__POST.categories.description'
  | 'author.authored_wordpress__POST.categories.link'
  | 'author.authored_wordpress__POST.categories.name'
  | 'author.authored_wordpress__POST.categories.slug'
  | 'author.authored_wordpress__POST.categories.wordpress_parent'
  | 'author.authored_wordpress__POST.categories.path'
  | 'author.authored_wordpress__POST.path'
  | 'author.authored_wordpress__PAGE'
  | 'author.authored_wordpress__PAGE.id'
  | 'author.authored_wordpress__PAGE.parent.id'
  | 'author.authored_wordpress__PAGE.parent.children'
  | 'author.authored_wordpress__PAGE.children'
  | 'author.authored_wordpress__PAGE.children.id'
  | 'author.authored_wordpress__PAGE.children.children'
  | 'author.authored_wordpress__PAGE.internal.content'
  | 'author.authored_wordpress__PAGE.internal.contentDigest'
  | 'author.authored_wordpress__PAGE.internal.description'
  | 'author.authored_wordpress__PAGE.internal.fieldOwners'
  | 'author.authored_wordpress__PAGE.internal.ignoreType'
  | 'author.authored_wordpress__PAGE.internal.mediaType'
  | 'author.authored_wordpress__PAGE.internal.owner'
  | 'author.authored_wordpress__PAGE.internal.type'
  | 'author.authored_wordpress__PAGE.wordpress_id'
  | 'author.authored_wordpress__PAGE.date'
  | 'author.authored_wordpress__PAGE.guid'
  | 'author.authored_wordpress__PAGE.modified'
  | 'author.authored_wordpress__PAGE.slug'
  | 'author.authored_wordpress__PAGE.status'
  | 'author.authored_wordpress__PAGE.type'
  | 'author.authored_wordpress__PAGE.link'
  | 'author.authored_wordpress__PAGE.title'
  | 'author.authored_wordpress__PAGE.content'
  | 'author.authored_wordpress__PAGE.excerpt'
  | 'author.authored_wordpress__PAGE.wordpress_parent'
  | 'author.authored_wordpress__PAGE.menu_order'
  | 'author.authored_wordpress__PAGE.comment_status'
  | 'author.authored_wordpress__PAGE.ping_status'
  | 'author.authored_wordpress__PAGE.template'
  | 'author.authored_wordpress__PAGE._links.self'
  | 'author.authored_wordpress__PAGE._links.collection'
  | 'author.authored_wordpress__PAGE._links.about'
  | 'author.authored_wordpress__PAGE._links.author'
  | 'author.authored_wordpress__PAGE._links.replies'
  | 'author.authored_wordpress__PAGE._links.version_history'
  | 'author.authored_wordpress__PAGE._links.predecessor_version'
  | 'author.authored_wordpress__PAGE._links.up'
  | 'author.authored_wordpress__PAGE._links.wp_attachment'
  | 'author.authored_wordpress__PAGE._links.curies'
  | 'author.authored_wordpress__PAGE.author.id'
  | 'author.authored_wordpress__PAGE.author.children'
  | 'author.authored_wordpress__PAGE.author.wordpress_id'
  | 'author.authored_wordpress__PAGE.author.name'
  | 'author.authored_wordpress__PAGE.author.url'
  | 'author.authored_wordpress__PAGE.author.description'
  | 'author.authored_wordpress__PAGE.author.link'
  | 'author.authored_wordpress__PAGE.author.slug'
  | 'author.authored_wordpress__PAGE.author.authored_wordpress__POST'
  | 'author.authored_wordpress__PAGE.author.authored_wordpress__PAGE'
  | 'author.authored_wordpress__PAGE.author.path'
  | 'author.authored_wordpress__PAGE.parent_element.id'
  | 'author.authored_wordpress__PAGE.parent_element.children'
  | 'author.authored_wordpress__PAGE.parent_element.wordpress_id'
  | 'author.authored_wordpress__PAGE.parent_element.date'
  | 'author.authored_wordpress__PAGE.parent_element.guid'
  | 'author.authored_wordpress__PAGE.parent_element.modified'
  | 'author.authored_wordpress__PAGE.parent_element.slug'
  | 'author.authored_wordpress__PAGE.parent_element.status'
  | 'author.authored_wordpress__PAGE.parent_element.type'
  | 'author.authored_wordpress__PAGE.parent_element.link'
  | 'author.authored_wordpress__PAGE.parent_element.title'
  | 'author.authored_wordpress__PAGE.parent_element.content'
  | 'author.authored_wordpress__PAGE.parent_element.excerpt'
  | 'author.authored_wordpress__PAGE.parent_element.wordpress_parent'
  | 'author.authored_wordpress__PAGE.parent_element.menu_order'
  | 'author.authored_wordpress__PAGE.parent_element.comment_status'
  | 'author.authored_wordpress__PAGE.parent_element.ping_status'
  | 'author.authored_wordpress__PAGE.parent_element.template'
  | 'author.authored_wordpress__PAGE.parent_element.path'
  | 'author.authored_wordpress__PAGE.path'
  | 'author.authored_wordpress__PAGE.acf.github'
  | 'author.path'
  | 'parent_element.id'
  | 'parent_element.parent.id'
  | 'parent_element.parent.parent.id'
  | 'parent_element.parent.parent.children'
  | 'parent_element.parent.children'
  | 'parent_element.parent.children.id'
  | 'parent_element.parent.children.children'
  | 'parent_element.parent.internal.content'
  | 'parent_element.parent.internal.contentDigest'
  | 'parent_element.parent.internal.description'
  | 'parent_element.parent.internal.fieldOwners'
  | 'parent_element.parent.internal.ignoreType'
  | 'parent_element.parent.internal.mediaType'
  | 'parent_element.parent.internal.owner'
  | 'parent_element.parent.internal.type'
  | 'parent_element.children'
  | 'parent_element.children.id'
  | 'parent_element.children.parent.id'
  | 'parent_element.children.parent.children'
  | 'parent_element.children.children'
  | 'parent_element.children.children.id'
  | 'parent_element.children.children.children'
  | 'parent_element.children.internal.content'
  | 'parent_element.children.internal.contentDigest'
  | 'parent_element.children.internal.description'
  | 'parent_element.children.internal.fieldOwners'
  | 'parent_element.children.internal.ignoreType'
  | 'parent_element.children.internal.mediaType'
  | 'parent_element.children.internal.owner'
  | 'parent_element.children.internal.type'
  | 'parent_element.internal.content'
  | 'parent_element.internal.contentDigest'
  | 'parent_element.internal.description'
  | 'parent_element.internal.fieldOwners'
  | 'parent_element.internal.ignoreType'
  | 'parent_element.internal.mediaType'
  | 'parent_element.internal.owner'
  | 'parent_element.internal.type'
  | 'parent_element.wordpress_id'
  | 'parent_element.date'
  | 'parent_element.guid'
  | 'parent_element.modified'
  | 'parent_element.slug'
  | 'parent_element.status'
  | 'parent_element.type'
  | 'parent_element.link'
  | 'parent_element.title'
  | 'parent_element.content'
  | 'parent_element.excerpt'
  | 'parent_element.wordpress_parent'
  | 'parent_element.menu_order'
  | 'parent_element.comment_status'
  | 'parent_element.ping_status'
  | 'parent_element.template'
  | 'parent_element._links.self'
  | 'parent_element._links.self.href'
  | 'parent_element._links.collection'
  | 'parent_element._links.collection.href'
  | 'parent_element._links.about'
  | 'parent_element._links.about.href'
  | 'parent_element._links.author'
  | 'parent_element._links.author.embeddable'
  | 'parent_element._links.author.href'
  | 'parent_element._links.replies'
  | 'parent_element._links.replies.embeddable'
  | 'parent_element._links.replies.href'
  | 'parent_element._links.version_history'
  | 'parent_element._links.version_history.count'
  | 'parent_element._links.version_history.href'
  | 'parent_element._links.predecessor_version'
  | 'parent_element._links.predecessor_version.wordpress_id'
  | 'parent_element._links.predecessor_version.href'
  | 'parent_element._links.up'
  | 'parent_element._links.up.embeddable'
  | 'parent_element._links.up.href'
  | 'parent_element._links.wp_attachment'
  | 'parent_element._links.wp_attachment.href'
  | 'parent_element._links.curies'
  | 'parent_element._links.curies.name'
  | 'parent_element._links.curies.href'
  | 'parent_element._links.curies.templated'
  | 'parent_element.author.id'
  | 'parent_element.author.parent.id'
  | 'parent_element.author.parent.children'
  | 'parent_element.author.children'
  | 'parent_element.author.children.id'
  | 'parent_element.author.children.children'
  | 'parent_element.author.internal.content'
  | 'parent_element.author.internal.contentDigest'
  | 'parent_element.author.internal.description'
  | 'parent_element.author.internal.fieldOwners'
  | 'parent_element.author.internal.ignoreType'
  | 'parent_element.author.internal.mediaType'
  | 'parent_element.author.internal.owner'
  | 'parent_element.author.internal.type'
  | 'parent_element.author.wordpress_id'
  | 'parent_element.author.name'
  | 'parent_element.author.url'
  | 'parent_element.author.description'
  | 'parent_element.author.link'
  | 'parent_element.author.slug'
  | 'parent_element.author.avatar_urls.wordpress_24'
  | 'parent_element.author.avatar_urls.wordpress_48'
  | 'parent_element.author.avatar_urls.wordpress_96'
  | 'parent_element.author._links.self'
  | 'parent_element.author._links.collection'
  | 'parent_element.author.authored_wordpress__POST'
  | 'parent_element.author.authored_wordpress__POST.id'
  | 'parent_element.author.authored_wordpress__POST.children'
  | 'parent_element.author.authored_wordpress__POST.wordpress_id'
  | 'parent_element.author.authored_wordpress__POST.date'
  | 'parent_element.author.authored_wordpress__POST.guid'
  | 'parent_element.author.authored_wordpress__POST.modified'
  | 'parent_element.author.authored_wordpress__POST.slug'
  | 'parent_element.author.authored_wordpress__POST.status'
  | 'parent_element.author.authored_wordpress__POST.type'
  | 'parent_element.author.authored_wordpress__POST.link'
  | 'parent_element.author.authored_wordpress__POST.title'
  | 'parent_element.author.authored_wordpress__POST.content'
  | 'parent_element.author.authored_wordpress__POST.excerpt'
  | 'parent_element.author.authored_wordpress__POST.comment_status'
  | 'parent_element.author.authored_wordpress__POST.ping_status'
  | 'parent_element.author.authored_wordpress__POST.sticky'
  | 'parent_element.author.authored_wordpress__POST.template'
  | 'parent_element.author.authored_wordpress__POST.format'
  | 'parent_element.author.authored_wordpress__POST.categories'
  | 'parent_element.author.authored_wordpress__POST.path'
  | 'parent_element.author.authored_wordpress__PAGE'
  | 'parent_element.author.authored_wordpress__PAGE.id'
  | 'parent_element.author.authored_wordpress__PAGE.children'
  | 'parent_element.author.authored_wordpress__PAGE.wordpress_id'
  | 'parent_element.author.authored_wordpress__PAGE.date'
  | 'parent_element.author.authored_wordpress__PAGE.guid'
  | 'parent_element.author.authored_wordpress__PAGE.modified'
  | 'parent_element.author.authored_wordpress__PAGE.slug'
  | 'parent_element.author.authored_wordpress__PAGE.status'
  | 'parent_element.author.authored_wordpress__PAGE.type'
  | 'parent_element.author.authored_wordpress__PAGE.link'
  | 'parent_element.author.authored_wordpress__PAGE.title'
  | 'parent_element.author.authored_wordpress__PAGE.content'
  | 'parent_element.author.authored_wordpress__PAGE.excerpt'
  | 'parent_element.author.authored_wordpress__PAGE.wordpress_parent'
  | 'parent_element.author.authored_wordpress__PAGE.menu_order'
  | 'parent_element.author.authored_wordpress__PAGE.comment_status'
  | 'parent_element.author.authored_wordpress__PAGE.ping_status'
  | 'parent_element.author.authored_wordpress__PAGE.template'
  | 'parent_element.author.authored_wordpress__PAGE.path'
  | 'parent_element.author.path'
  | 'parent_element.parent_element.id'
  | 'parent_element.parent_element.parent.id'
  | 'parent_element.parent_element.parent.children'
  | 'parent_element.parent_element.children'
  | 'parent_element.parent_element.children.id'
  | 'parent_element.parent_element.children.children'
  | 'parent_element.parent_element.internal.content'
  | 'parent_element.parent_element.internal.contentDigest'
  | 'parent_element.parent_element.internal.description'
  | 'parent_element.parent_element.internal.fieldOwners'
  | 'parent_element.parent_element.internal.ignoreType'
  | 'parent_element.parent_element.internal.mediaType'
  | 'parent_element.parent_element.internal.owner'
  | 'parent_element.parent_element.internal.type'
  | 'parent_element.parent_element.wordpress_id'
  | 'parent_element.parent_element.date'
  | 'parent_element.parent_element.guid'
  | 'parent_element.parent_element.modified'
  | 'parent_element.parent_element.slug'
  | 'parent_element.parent_element.status'
  | 'parent_element.parent_element.type'
  | 'parent_element.parent_element.link'
  | 'parent_element.parent_element.title'
  | 'parent_element.parent_element.content'
  | 'parent_element.parent_element.excerpt'
  | 'parent_element.parent_element.wordpress_parent'
  | 'parent_element.parent_element.menu_order'
  | 'parent_element.parent_element.comment_status'
  | 'parent_element.parent_element.ping_status'
  | 'parent_element.parent_element.template'
  | 'parent_element.parent_element._links.self'
  | 'parent_element.parent_element._links.collection'
  | 'parent_element.parent_element._links.about'
  | 'parent_element.parent_element._links.author'
  | 'parent_element.parent_element._links.replies'
  | 'parent_element.parent_element._links.version_history'
  | 'parent_element.parent_element._links.predecessor_version'
  | 'parent_element.parent_element._links.up'
  | 'parent_element.parent_element._links.wp_attachment'
  | 'parent_element.parent_element._links.curies'
  | 'parent_element.parent_element.author.id'
  | 'parent_element.parent_element.author.children'
  | 'parent_element.parent_element.author.wordpress_id'
  | 'parent_element.parent_element.author.name'
  | 'parent_element.parent_element.author.url'
  | 'parent_element.parent_element.author.description'
  | 'parent_element.parent_element.author.link'
  | 'parent_element.parent_element.author.slug'
  | 'parent_element.parent_element.author.authored_wordpress__POST'
  | 'parent_element.parent_element.author.authored_wordpress__PAGE'
  | 'parent_element.parent_element.author.path'
  | 'parent_element.parent_element.parent_element.id'
  | 'parent_element.parent_element.parent_element.children'
  | 'parent_element.parent_element.parent_element.wordpress_id'
  | 'parent_element.parent_element.parent_element.date'
  | 'parent_element.parent_element.parent_element.guid'
  | 'parent_element.parent_element.parent_element.modified'
  | 'parent_element.parent_element.parent_element.slug'
  | 'parent_element.parent_element.parent_element.status'
  | 'parent_element.parent_element.parent_element.type'
  | 'parent_element.parent_element.parent_element.link'
  | 'parent_element.parent_element.parent_element.title'
  | 'parent_element.parent_element.parent_element.content'
  | 'parent_element.parent_element.parent_element.excerpt'
  | 'parent_element.parent_element.parent_element.wordpress_parent'
  | 'parent_element.parent_element.parent_element.menu_order'
  | 'parent_element.parent_element.parent_element.comment_status'
  | 'parent_element.parent_element.parent_element.ping_status'
  | 'parent_element.parent_element.parent_element.template'
  | 'parent_element.parent_element.parent_element.path'
  | 'parent_element.parent_element.path'
  | 'parent_element.parent_element.acf.github'
  | 'parent_element.path'
  | 'parent_element.acf.github'
  | 'path'
  | 'acf.github';

type wordpress__PAGEFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly guid: Maybe<StringQueryOperatorInput>;
  readonly modified: Maybe<DateQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly wordpress_parent: Maybe<IntQueryOperatorInput>;
  readonly menu_order: Maybe<IntQueryOperatorInput>;
  readonly comment_status: Maybe<StringQueryOperatorInput>;
  readonly ping_status: Maybe<StringQueryOperatorInput>;
  readonly template: Maybe<StringQueryOperatorInput>;
  readonly _links: Maybe<wordpress__PAGE_linksFilterInput>;
  readonly author: Maybe<wordpress__wp_usersFilterInput>;
  readonly parent_element: Maybe<wordpress__PAGEFilterInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly acf: Maybe<wordpress__PAGEAcfFilterInput>;
};

type wordpress__PAGEFilterListInput = {
  readonly elemMatch: Maybe<wordpress__PAGEFilterInput>;
};

type wordpress__PAGEGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__PAGEEdge>;
  readonly nodes: ReadonlyArray<wordpress__PAGE>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__PAGESortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__PAGEFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__PAGEwordpress__POSTUnion = wordpress__PAGE | wordpress__POST;

type wordpress__POST = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['Int']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly guid: Maybe<Scalars['String']>;
  readonly modified: Maybe<Scalars['Date']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly content: Maybe<Scalars['String']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly comment_status: Maybe<Scalars['String']>;
  readonly ping_status: Maybe<Scalars['String']>;
  readonly sticky: Maybe<Scalars['Boolean']>;
  readonly template: Maybe<Scalars['String']>;
  readonly format: Maybe<Scalars['String']>;
  readonly _links: Maybe<wordpress__POST_links>;
  readonly author: Maybe<wordpress__wp_users>;
  readonly categories: Maybe<ReadonlyArray<Maybe<wordpress__CATEGORY>>>;
  readonly path: Maybe<Scalars['String']>;
};


type wordpress__POST_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type wordpress__POST_modifiedArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type wordpress__POST_links = {
  readonly self: Maybe<ReadonlyArray<Maybe<wordpress__POST_linksSelf>>>;
  readonly collection: Maybe<ReadonlyArray<Maybe<wordpress__POST_linksCollection>>>;
  readonly about: Maybe<ReadonlyArray<Maybe<wordpress__POST_linksAbout>>>;
  readonly author: Maybe<ReadonlyArray<Maybe<wordpress__POST_linksAuthor>>>;
  readonly replies: Maybe<ReadonlyArray<Maybe<wordpress__POST_linksReplies>>>;
  readonly version_history: Maybe<ReadonlyArray<Maybe<wordpress__POST_linksVersion_history>>>;
  readonly wp_attachment: Maybe<ReadonlyArray<Maybe<wordpress__POST_linksWp_attachment>>>;
  readonly wp_term: Maybe<ReadonlyArray<Maybe<wordpress__POST_linksWp_term>>>;
  readonly curies: Maybe<ReadonlyArray<Maybe<wordpress__POST_linksCuries>>>;
};

type wordpress__POST_linksAbout = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__POST_linksAboutFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__POST_linksAboutFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POST_linksAboutFilterInput>;
};

type wordpress__POST_linksAuthor = {
  readonly embeddable: Maybe<Scalars['Boolean']>;
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__POST_linksAuthorFilterInput = {
  readonly embeddable: Maybe<BooleanQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__POST_linksAuthorFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POST_linksAuthorFilterInput>;
};

type wordpress__POST_linksCollection = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__POST_linksCollectionFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__POST_linksCollectionFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POST_linksCollectionFilterInput>;
};

type wordpress__POST_linksCuries = {
  readonly name: Maybe<Scalars['String']>;
  readonly href: Maybe<Scalars['String']>;
  readonly templated: Maybe<Scalars['Boolean']>;
};

type wordpress__POST_linksCuriesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly templated: Maybe<BooleanQueryOperatorInput>;
};

type wordpress__POST_linksCuriesFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POST_linksCuriesFilterInput>;
};

type wordpress__POST_linksFilterInput = {
  readonly self: Maybe<wordpress__POST_linksSelfFilterListInput>;
  readonly collection: Maybe<wordpress__POST_linksCollectionFilterListInput>;
  readonly about: Maybe<wordpress__POST_linksAboutFilterListInput>;
  readonly author: Maybe<wordpress__POST_linksAuthorFilterListInput>;
  readonly replies: Maybe<wordpress__POST_linksRepliesFilterListInput>;
  readonly version_history: Maybe<wordpress__POST_linksVersion_historyFilterListInput>;
  readonly wp_attachment: Maybe<wordpress__POST_linksWp_attachmentFilterListInput>;
  readonly wp_term: Maybe<wordpress__POST_linksWp_termFilterListInput>;
  readonly curies: Maybe<wordpress__POST_linksCuriesFilterListInput>;
};

type wordpress__POST_linksReplies = {
  readonly embeddable: Maybe<Scalars['Boolean']>;
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__POST_linksRepliesFilterInput = {
  readonly embeddable: Maybe<BooleanQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__POST_linksRepliesFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POST_linksRepliesFilterInput>;
};

type wordpress__POST_linksSelf = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__POST_linksSelfFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__POST_linksSelfFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POST_linksSelfFilterInput>;
};

type wordpress__POST_linksVersion_history = {
  readonly count: Maybe<Scalars['Int']>;
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__POST_linksVersion_historyFilterInput = {
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__POST_linksVersion_historyFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POST_linksVersion_historyFilterInput>;
};

type wordpress__POST_linksWp_attachment = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__POST_linksWp_attachmentFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__POST_linksWp_attachmentFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POST_linksWp_attachmentFilterInput>;
};

type wordpress__POST_linksWp_term = {
  readonly taxonomy: Maybe<Scalars['String']>;
  readonly embeddable: Maybe<Scalars['Boolean']>;
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__POST_linksWp_termFilterInput = {
  readonly taxonomy: Maybe<StringQueryOperatorInput>;
  readonly embeddable: Maybe<BooleanQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__POST_linksWp_termFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POST_linksWp_termFilterInput>;
};

type wordpress__POSTConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__POSTEdge>;
  readonly nodes: ReadonlyArray<wordpress__POST>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__POSTGroupConnection>;
};


type wordpress__POSTConnection_distinctArgs = {
  field: wordpress__POSTFieldsEnum;
};


type wordpress__POSTConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__POSTFieldsEnum;
};

type wordpress__POSTEdge = {
  readonly next: Maybe<wordpress__POST>;
  readonly node: wordpress__POST;
  readonly previous: Maybe<wordpress__POST>;
};

type wordpress__POSTFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id'
  | 'date'
  | 'guid'
  | 'modified'
  | 'slug'
  | 'status'
  | 'type'
  | 'link'
  | 'title'
  | 'content'
  | 'excerpt'
  | 'comment_status'
  | 'ping_status'
  | 'sticky'
  | 'template'
  | 'format'
  | '_links.self'
  | '_links.self.href'
  | '_links.collection'
  | '_links.collection.href'
  | '_links.about'
  | '_links.about.href'
  | '_links.author'
  | '_links.author.embeddable'
  | '_links.author.href'
  | '_links.replies'
  | '_links.replies.embeddable'
  | '_links.replies.href'
  | '_links.version_history'
  | '_links.version_history.count'
  | '_links.version_history.href'
  | '_links.wp_attachment'
  | '_links.wp_attachment.href'
  | '_links.wp_term'
  | '_links.wp_term.taxonomy'
  | '_links.wp_term.embeddable'
  | '_links.wp_term.href'
  | '_links.curies'
  | '_links.curies.name'
  | '_links.curies.href'
  | '_links.curies.templated'
  | 'author.id'
  | 'author.parent.id'
  | 'author.parent.parent.id'
  | 'author.parent.parent.children'
  | 'author.parent.children'
  | 'author.parent.children.id'
  | 'author.parent.children.children'
  | 'author.parent.internal.content'
  | 'author.parent.internal.contentDigest'
  | 'author.parent.internal.description'
  | 'author.parent.internal.fieldOwners'
  | 'author.parent.internal.ignoreType'
  | 'author.parent.internal.mediaType'
  | 'author.parent.internal.owner'
  | 'author.parent.internal.type'
  | 'author.children'
  | 'author.children.id'
  | 'author.children.parent.id'
  | 'author.children.parent.children'
  | 'author.children.children'
  | 'author.children.children.id'
  | 'author.children.children.children'
  | 'author.children.internal.content'
  | 'author.children.internal.contentDigest'
  | 'author.children.internal.description'
  | 'author.children.internal.fieldOwners'
  | 'author.children.internal.ignoreType'
  | 'author.children.internal.mediaType'
  | 'author.children.internal.owner'
  | 'author.children.internal.type'
  | 'author.internal.content'
  | 'author.internal.contentDigest'
  | 'author.internal.description'
  | 'author.internal.fieldOwners'
  | 'author.internal.ignoreType'
  | 'author.internal.mediaType'
  | 'author.internal.owner'
  | 'author.internal.type'
  | 'author.wordpress_id'
  | 'author.name'
  | 'author.url'
  | 'author.description'
  | 'author.link'
  | 'author.slug'
  | 'author.avatar_urls.wordpress_24'
  | 'author.avatar_urls.wordpress_48'
  | 'author.avatar_urls.wordpress_96'
  | 'author._links.self'
  | 'author._links.self.href'
  | 'author._links.collection'
  | 'author._links.collection.href'
  | 'author.authored_wordpress__POST'
  | 'author.authored_wordpress__POST.id'
  | 'author.authored_wordpress__POST.parent.id'
  | 'author.authored_wordpress__POST.parent.children'
  | 'author.authored_wordpress__POST.children'
  | 'author.authored_wordpress__POST.children.id'
  | 'author.authored_wordpress__POST.children.children'
  | 'author.authored_wordpress__POST.internal.content'
  | 'author.authored_wordpress__POST.internal.contentDigest'
  | 'author.authored_wordpress__POST.internal.description'
  | 'author.authored_wordpress__POST.internal.fieldOwners'
  | 'author.authored_wordpress__POST.internal.ignoreType'
  | 'author.authored_wordpress__POST.internal.mediaType'
  | 'author.authored_wordpress__POST.internal.owner'
  | 'author.authored_wordpress__POST.internal.type'
  | 'author.authored_wordpress__POST.wordpress_id'
  | 'author.authored_wordpress__POST.date'
  | 'author.authored_wordpress__POST.guid'
  | 'author.authored_wordpress__POST.modified'
  | 'author.authored_wordpress__POST.slug'
  | 'author.authored_wordpress__POST.status'
  | 'author.authored_wordpress__POST.type'
  | 'author.authored_wordpress__POST.link'
  | 'author.authored_wordpress__POST.title'
  | 'author.authored_wordpress__POST.content'
  | 'author.authored_wordpress__POST.excerpt'
  | 'author.authored_wordpress__POST.comment_status'
  | 'author.authored_wordpress__POST.ping_status'
  | 'author.authored_wordpress__POST.sticky'
  | 'author.authored_wordpress__POST.template'
  | 'author.authored_wordpress__POST.format'
  | 'author.authored_wordpress__POST._links.self'
  | 'author.authored_wordpress__POST._links.collection'
  | 'author.authored_wordpress__POST._links.about'
  | 'author.authored_wordpress__POST._links.author'
  | 'author.authored_wordpress__POST._links.replies'
  | 'author.authored_wordpress__POST._links.version_history'
  | 'author.authored_wordpress__POST._links.wp_attachment'
  | 'author.authored_wordpress__POST._links.wp_term'
  | 'author.authored_wordpress__POST._links.curies'
  | 'author.authored_wordpress__POST.author.id'
  | 'author.authored_wordpress__POST.author.children'
  | 'author.authored_wordpress__POST.author.wordpress_id'
  | 'author.authored_wordpress__POST.author.name'
  | 'author.authored_wordpress__POST.author.url'
  | 'author.authored_wordpress__POST.author.description'
  | 'author.authored_wordpress__POST.author.link'
  | 'author.authored_wordpress__POST.author.slug'
  | 'author.authored_wordpress__POST.author.authored_wordpress__POST'
  | 'author.authored_wordpress__POST.author.authored_wordpress__PAGE'
  | 'author.authored_wordpress__POST.author.path'
  | 'author.authored_wordpress__POST.categories'
  | 'author.authored_wordpress__POST.categories.id'
  | 'author.authored_wordpress__POST.categories.children'
  | 'author.authored_wordpress__POST.categories.wordpress_id'
  | 'author.authored_wordpress__POST.categories.count'
  | 'author.authored_wordpress__POST.categories.description'
  | 'author.authored_wordpress__POST.categories.link'
  | 'author.authored_wordpress__POST.categories.name'
  | 'author.authored_wordpress__POST.categories.slug'
  | 'author.authored_wordpress__POST.categories.wordpress_parent'
  | 'author.authored_wordpress__POST.categories.path'
  | 'author.authored_wordpress__POST.path'
  | 'author.authored_wordpress__PAGE'
  | 'author.authored_wordpress__PAGE.id'
  | 'author.authored_wordpress__PAGE.parent.id'
  | 'author.authored_wordpress__PAGE.parent.children'
  | 'author.authored_wordpress__PAGE.children'
  | 'author.authored_wordpress__PAGE.children.id'
  | 'author.authored_wordpress__PAGE.children.children'
  | 'author.authored_wordpress__PAGE.internal.content'
  | 'author.authored_wordpress__PAGE.internal.contentDigest'
  | 'author.authored_wordpress__PAGE.internal.description'
  | 'author.authored_wordpress__PAGE.internal.fieldOwners'
  | 'author.authored_wordpress__PAGE.internal.ignoreType'
  | 'author.authored_wordpress__PAGE.internal.mediaType'
  | 'author.authored_wordpress__PAGE.internal.owner'
  | 'author.authored_wordpress__PAGE.internal.type'
  | 'author.authored_wordpress__PAGE.wordpress_id'
  | 'author.authored_wordpress__PAGE.date'
  | 'author.authored_wordpress__PAGE.guid'
  | 'author.authored_wordpress__PAGE.modified'
  | 'author.authored_wordpress__PAGE.slug'
  | 'author.authored_wordpress__PAGE.status'
  | 'author.authored_wordpress__PAGE.type'
  | 'author.authored_wordpress__PAGE.link'
  | 'author.authored_wordpress__PAGE.title'
  | 'author.authored_wordpress__PAGE.content'
  | 'author.authored_wordpress__PAGE.excerpt'
  | 'author.authored_wordpress__PAGE.wordpress_parent'
  | 'author.authored_wordpress__PAGE.menu_order'
  | 'author.authored_wordpress__PAGE.comment_status'
  | 'author.authored_wordpress__PAGE.ping_status'
  | 'author.authored_wordpress__PAGE.template'
  | 'author.authored_wordpress__PAGE._links.self'
  | 'author.authored_wordpress__PAGE._links.collection'
  | 'author.authored_wordpress__PAGE._links.about'
  | 'author.authored_wordpress__PAGE._links.author'
  | 'author.authored_wordpress__PAGE._links.replies'
  | 'author.authored_wordpress__PAGE._links.version_history'
  | 'author.authored_wordpress__PAGE._links.predecessor_version'
  | 'author.authored_wordpress__PAGE._links.up'
  | 'author.authored_wordpress__PAGE._links.wp_attachment'
  | 'author.authored_wordpress__PAGE._links.curies'
  | 'author.authored_wordpress__PAGE.author.id'
  | 'author.authored_wordpress__PAGE.author.children'
  | 'author.authored_wordpress__PAGE.author.wordpress_id'
  | 'author.authored_wordpress__PAGE.author.name'
  | 'author.authored_wordpress__PAGE.author.url'
  | 'author.authored_wordpress__PAGE.author.description'
  | 'author.authored_wordpress__PAGE.author.link'
  | 'author.authored_wordpress__PAGE.author.slug'
  | 'author.authored_wordpress__PAGE.author.authored_wordpress__POST'
  | 'author.authored_wordpress__PAGE.author.authored_wordpress__PAGE'
  | 'author.authored_wordpress__PAGE.author.path'
  | 'author.authored_wordpress__PAGE.parent_element.id'
  | 'author.authored_wordpress__PAGE.parent_element.children'
  | 'author.authored_wordpress__PAGE.parent_element.wordpress_id'
  | 'author.authored_wordpress__PAGE.parent_element.date'
  | 'author.authored_wordpress__PAGE.parent_element.guid'
  | 'author.authored_wordpress__PAGE.parent_element.modified'
  | 'author.authored_wordpress__PAGE.parent_element.slug'
  | 'author.authored_wordpress__PAGE.parent_element.status'
  | 'author.authored_wordpress__PAGE.parent_element.type'
  | 'author.authored_wordpress__PAGE.parent_element.link'
  | 'author.authored_wordpress__PAGE.parent_element.title'
  | 'author.authored_wordpress__PAGE.parent_element.content'
  | 'author.authored_wordpress__PAGE.parent_element.excerpt'
  | 'author.authored_wordpress__PAGE.parent_element.wordpress_parent'
  | 'author.authored_wordpress__PAGE.parent_element.menu_order'
  | 'author.authored_wordpress__PAGE.parent_element.comment_status'
  | 'author.authored_wordpress__PAGE.parent_element.ping_status'
  | 'author.authored_wordpress__PAGE.parent_element.template'
  | 'author.authored_wordpress__PAGE.parent_element.path'
  | 'author.authored_wordpress__PAGE.path'
  | 'author.authored_wordpress__PAGE.acf.github'
  | 'author.path'
  | 'categories'
  | 'categories.id'
  | 'categories.parent.id'
  | 'categories.parent.parent.id'
  | 'categories.parent.parent.children'
  | 'categories.parent.children'
  | 'categories.parent.children.id'
  | 'categories.parent.children.children'
  | 'categories.parent.internal.content'
  | 'categories.parent.internal.contentDigest'
  | 'categories.parent.internal.description'
  | 'categories.parent.internal.fieldOwners'
  | 'categories.parent.internal.ignoreType'
  | 'categories.parent.internal.mediaType'
  | 'categories.parent.internal.owner'
  | 'categories.parent.internal.type'
  | 'categories.children'
  | 'categories.children.id'
  | 'categories.children.parent.id'
  | 'categories.children.parent.children'
  | 'categories.children.children'
  | 'categories.children.children.id'
  | 'categories.children.children.children'
  | 'categories.children.internal.content'
  | 'categories.children.internal.contentDigest'
  | 'categories.children.internal.description'
  | 'categories.children.internal.fieldOwners'
  | 'categories.children.internal.ignoreType'
  | 'categories.children.internal.mediaType'
  | 'categories.children.internal.owner'
  | 'categories.children.internal.type'
  | 'categories.internal.content'
  | 'categories.internal.contentDigest'
  | 'categories.internal.description'
  | 'categories.internal.fieldOwners'
  | 'categories.internal.ignoreType'
  | 'categories.internal.mediaType'
  | 'categories.internal.owner'
  | 'categories.internal.type'
  | 'categories.wordpress_id'
  | 'categories.count'
  | 'categories.description'
  | 'categories.link'
  | 'categories.name'
  | 'categories.slug'
  | 'categories.wordpress_parent'
  | 'categories._links.self'
  | 'categories._links.self.href'
  | 'categories._links.collection'
  | 'categories._links.collection.href'
  | 'categories._links.about'
  | 'categories._links.about.href'
  | 'categories._links.wp_post_type'
  | 'categories._links.wp_post_type.href'
  | 'categories._links.curies'
  | 'categories._links.curies.name'
  | 'categories._links.curies.href'
  | 'categories._links.curies.templated'
  | 'categories.taxonomy.id'
  | 'categories.taxonomy.parent.id'
  | 'categories.taxonomy.parent.children'
  | 'categories.taxonomy.children'
  | 'categories.taxonomy.children.id'
  | 'categories.taxonomy.children.children'
  | 'categories.taxonomy.internal.content'
  | 'categories.taxonomy.internal.contentDigest'
  | 'categories.taxonomy.internal.description'
  | 'categories.taxonomy.internal.fieldOwners'
  | 'categories.taxonomy.internal.ignoreType'
  | 'categories.taxonomy.internal.mediaType'
  | 'categories.taxonomy.internal.owner'
  | 'categories.taxonomy.internal.type'
  | 'categories.taxonomy.wordpress_id'
  | 'categories.taxonomy.name'
  | 'categories.taxonomy.slug'
  | 'categories.taxonomy.description'
  | 'categories.taxonomy.types'
  | 'categories.taxonomy.hierarchical'
  | 'categories.taxonomy.rest_base'
  | 'categories.taxonomy._links.collection'
  | 'categories.taxonomy._links.wp_items'
  | 'categories.taxonomy._links.curies'
  | 'categories.path'
  | 'path';

type wordpress__POSTFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly guid: Maybe<StringQueryOperatorInput>;
  readonly modified: Maybe<DateQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly status: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly comment_status: Maybe<StringQueryOperatorInput>;
  readonly ping_status: Maybe<StringQueryOperatorInput>;
  readonly sticky: Maybe<BooleanQueryOperatorInput>;
  readonly template: Maybe<StringQueryOperatorInput>;
  readonly format: Maybe<StringQueryOperatorInput>;
  readonly _links: Maybe<wordpress__POST_linksFilterInput>;
  readonly author: Maybe<wordpress__wp_usersFilterInput>;
  readonly categories: Maybe<wordpress__CATEGORYFilterListInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
};

type wordpress__POSTFilterListInput = {
  readonly elemMatch: Maybe<wordpress__POSTFilterInput>;
};

type wordpress__POSTGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__POSTEdge>;
  readonly nodes: ReadonlyArray<wordpress__POST>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__POSTSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__POSTFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__site_metadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly home: Maybe<Scalars['String']>;
};

type wordpress__site_metadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__site_metadataEdge>;
  readonly nodes: ReadonlyArray<wordpress__site_metadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__site_metadataGroupConnection>;
};


type wordpress__site_metadataConnection_distinctArgs = {
  field: wordpress__site_metadataFieldsEnum;
};


type wordpress__site_metadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__site_metadataFieldsEnum;
};

type wordpress__site_metadataEdge = {
  readonly next: Maybe<wordpress__site_metadata>;
  readonly node: wordpress__site_metadata;
  readonly previous: Maybe<wordpress__site_metadata>;
};

type wordpress__site_metadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'description'
  | 'url'
  | 'home';

type wordpress__site_metadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly home: Maybe<StringQueryOperatorInput>;
};

type wordpress__site_metadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__site_metadataEdge>;
  readonly nodes: ReadonlyArray<wordpress__site_metadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__site_metadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__site_metadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__wp_api_menus_menus = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly term_id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly term_group: Maybe<Scalars['Int']>;
  readonly term_taxonomy_id: Maybe<Scalars['Int']>;
  readonly taxonomy: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly wordpress_parent: Maybe<Scalars['Int']>;
  readonly count: Maybe<Scalars['Int']>;
  readonly filter: Maybe<Scalars['String']>;
  readonly wordpress_id: Maybe<Scalars['Int']>;
  readonly meta: Maybe<wordpress__wp_api_menus_menusMeta>;
};

type wordpress__wp_api_menus_menus_items = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly count: Maybe<Scalars['Int']>;
  readonly items: Maybe<ReadonlyArray<Maybe<wordpress__wp_api_menus_menus_itemsItems>>>;
  readonly meta: Maybe<wordpress__wp_api_menus_menus_itemsMeta>;
};

type wordpress__wp_api_menus_menus_itemsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__wp_api_menus_menus_itemsEdge>;
  readonly nodes: ReadonlyArray<wordpress__wp_api_menus_menus_items>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__wp_api_menus_menus_itemsGroupConnection>;
};


type wordpress__wp_api_menus_menus_itemsConnection_distinctArgs = {
  field: wordpress__wp_api_menus_menus_itemsFieldsEnum;
};


type wordpress__wp_api_menus_menus_itemsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__wp_api_menus_menus_itemsFieldsEnum;
};

type wordpress__wp_api_menus_menus_itemsEdge = {
  readonly next: Maybe<wordpress__wp_api_menus_menus_items>;
  readonly node: wordpress__wp_api_menus_menus_items;
  readonly previous: Maybe<wordpress__wp_api_menus_menus_items>;
};

type wordpress__wp_api_menus_menus_itemsFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id'
  | 'name'
  | 'slug'
  | 'description'
  | 'count'
  | 'items'
  | 'items.wordpress_id'
  | 'items.order'
  | 'items.wordpress_parent'
  | 'items.title'
  | 'items.url'
  | 'items.attr'
  | 'items.target'
  | 'items.classes'
  | 'items.xfn'
  | 'items.description'
  | 'items.object_id'
  | 'items.object'
  | 'items.object_slug'
  | 'items.type'
  | 'items.type_label'
  | 'meta.links.collection'
  | 'meta.links.self';

type wordpress__wp_api_menus_menus_itemsFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly items: Maybe<wordpress__wp_api_menus_menus_itemsItemsFilterListInput>;
  readonly meta: Maybe<wordpress__wp_api_menus_menus_itemsMetaFilterInput>;
};

type wordpress__wp_api_menus_menus_itemsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__wp_api_menus_menus_itemsEdge>;
  readonly nodes: ReadonlyArray<wordpress__wp_api_menus_menus_items>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__wp_api_menus_menus_itemsItems = {
  readonly wordpress_id: Maybe<Scalars['Int']>;
  readonly order: Maybe<Scalars['Int']>;
  readonly wordpress_parent: Maybe<Scalars['Int']>;
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly attr: Maybe<Scalars['String']>;
  readonly target: Maybe<Scalars['String']>;
  readonly classes: Maybe<Scalars['String']>;
  readonly xfn: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly object_id: Maybe<Scalars['Int']>;
  readonly object: Maybe<Scalars['String']>;
  readonly object_slug: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly type_label: Maybe<Scalars['String']>;
};

type wordpress__wp_api_menus_menus_itemsItemsFilterInput = {
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
  readonly order: Maybe<IntQueryOperatorInput>;
  readonly wordpress_parent: Maybe<IntQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly attr: Maybe<StringQueryOperatorInput>;
  readonly target: Maybe<StringQueryOperatorInput>;
  readonly classes: Maybe<StringQueryOperatorInput>;
  readonly xfn: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly object_id: Maybe<IntQueryOperatorInput>;
  readonly object: Maybe<StringQueryOperatorInput>;
  readonly object_slug: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly type_label: Maybe<StringQueryOperatorInput>;
};

type wordpress__wp_api_menus_menus_itemsItemsFilterListInput = {
  readonly elemMatch: Maybe<wordpress__wp_api_menus_menus_itemsItemsFilterInput>;
};

type wordpress__wp_api_menus_menus_itemsMeta = {
  readonly links: Maybe<wordpress__wp_api_menus_menus_itemsMetaLinks>;
};

type wordpress__wp_api_menus_menus_itemsMetaFilterInput = {
  readonly links: Maybe<wordpress__wp_api_menus_menus_itemsMetaLinksFilterInput>;
};

type wordpress__wp_api_menus_menus_itemsMetaLinks = {
  readonly collection: Maybe<Scalars['String']>;
  readonly self: Maybe<Scalars['String']>;
};

type wordpress__wp_api_menus_menus_itemsMetaLinksFilterInput = {
  readonly collection: Maybe<StringQueryOperatorInput>;
  readonly self: Maybe<StringQueryOperatorInput>;
};

type wordpress__wp_api_menus_menus_itemsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__wp_api_menus_menus_itemsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__wp_api_menus_menusConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__wp_api_menus_menusEdge>;
  readonly nodes: ReadonlyArray<wordpress__wp_api_menus_menus>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__wp_api_menus_menusGroupConnection>;
};


type wordpress__wp_api_menus_menusConnection_distinctArgs = {
  field: wordpress__wp_api_menus_menusFieldsEnum;
};


type wordpress__wp_api_menus_menusConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__wp_api_menus_menusFieldsEnum;
};

type wordpress__wp_api_menus_menusEdge = {
  readonly next: Maybe<wordpress__wp_api_menus_menus>;
  readonly node: wordpress__wp_api_menus_menus;
  readonly previous: Maybe<wordpress__wp_api_menus_menus>;
};

type wordpress__wp_api_menus_menusFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'term_id'
  | 'name'
  | 'slug'
  | 'term_group'
  | 'term_taxonomy_id'
  | 'taxonomy'
  | 'description'
  | 'wordpress_parent'
  | 'count'
  | 'filter'
  | 'wordpress_id'
  | 'meta.links.collection'
  | 'meta.links.self';

type wordpress__wp_api_menus_menusFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly term_id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly term_group: Maybe<IntQueryOperatorInput>;
  readonly term_taxonomy_id: Maybe<IntQueryOperatorInput>;
  readonly taxonomy: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly wordpress_parent: Maybe<IntQueryOperatorInput>;
  readonly count: Maybe<IntQueryOperatorInput>;
  readonly filter: Maybe<StringQueryOperatorInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
  readonly meta: Maybe<wordpress__wp_api_menus_menusMetaFilterInput>;
};

type wordpress__wp_api_menus_menusGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__wp_api_menus_menusEdge>;
  readonly nodes: ReadonlyArray<wordpress__wp_api_menus_menus>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__wp_api_menus_menusMeta = {
  readonly links: Maybe<wordpress__wp_api_menus_menusMetaLinks>;
};

type wordpress__wp_api_menus_menusMetaFilterInput = {
  readonly links: Maybe<wordpress__wp_api_menus_menusMetaLinksFilterInput>;
};

type wordpress__wp_api_menus_menusMetaLinks = {
  readonly collection: Maybe<Scalars['String']>;
  readonly self: Maybe<Scalars['String']>;
};

type wordpress__wp_api_menus_menusMetaLinksFilterInput = {
  readonly collection: Maybe<StringQueryOperatorInput>;
  readonly self: Maybe<StringQueryOperatorInput>;
};

type wordpress__wp_api_menus_menusSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__wp_api_menus_menusFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__wp_taxonomies = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly types: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  readonly rest_base: Maybe<Scalars['String']>;
  readonly _links: Maybe<wordpress__wp_taxonomies_links>;
};

type wordpress__wp_taxonomies_links = {
  readonly collection: Maybe<ReadonlyArray<Maybe<wordpress__wp_taxonomies_linksCollection>>>;
  readonly wp_items: Maybe<ReadonlyArray<Maybe<wordpress__wp_taxonomies_linksWp_items>>>;
  readonly curies: Maybe<ReadonlyArray<Maybe<wordpress__wp_taxonomies_linksCuries>>>;
};

type wordpress__wp_taxonomies_linksCollection = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__wp_taxonomies_linksCollectionFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__wp_taxonomies_linksCollectionFilterListInput = {
  readonly elemMatch: Maybe<wordpress__wp_taxonomies_linksCollectionFilterInput>;
};

type wordpress__wp_taxonomies_linksCuries = {
  readonly name: Maybe<Scalars['String']>;
  readonly href: Maybe<Scalars['String']>;
  readonly templated: Maybe<Scalars['Boolean']>;
};

type wordpress__wp_taxonomies_linksCuriesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly templated: Maybe<BooleanQueryOperatorInput>;
};

type wordpress__wp_taxonomies_linksCuriesFilterListInput = {
  readonly elemMatch: Maybe<wordpress__wp_taxonomies_linksCuriesFilterInput>;
};

type wordpress__wp_taxonomies_linksFilterInput = {
  readonly collection: Maybe<wordpress__wp_taxonomies_linksCollectionFilterListInput>;
  readonly wp_items: Maybe<wordpress__wp_taxonomies_linksWp_itemsFilterListInput>;
  readonly curies: Maybe<wordpress__wp_taxonomies_linksCuriesFilterListInput>;
};

type wordpress__wp_taxonomies_linksWp_items = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__wp_taxonomies_linksWp_itemsFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__wp_taxonomies_linksWp_itemsFilterListInput = {
  readonly elemMatch: Maybe<wordpress__wp_taxonomies_linksWp_itemsFilterInput>;
};

type wordpress__wp_taxonomiesConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__wp_taxonomiesEdge>;
  readonly nodes: ReadonlyArray<wordpress__wp_taxonomies>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__wp_taxonomiesGroupConnection>;
};


type wordpress__wp_taxonomiesConnection_distinctArgs = {
  field: wordpress__wp_taxonomiesFieldsEnum;
};


type wordpress__wp_taxonomiesConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__wp_taxonomiesFieldsEnum;
};

type wordpress__wp_taxonomiesEdge = {
  readonly next: Maybe<wordpress__wp_taxonomies>;
  readonly node: wordpress__wp_taxonomies;
  readonly previous: Maybe<wordpress__wp_taxonomies>;
};

type wordpress__wp_taxonomiesFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id'
  | 'name'
  | 'slug'
  | 'description'
  | 'types'
  | 'hierarchical'
  | 'rest_base'
  | '_links.collection'
  | '_links.collection.href'
  | '_links.wp_items'
  | '_links.wp_items.href'
  | '_links.curies'
  | '_links.curies.name'
  | '_links.curies.href'
  | '_links.curies.templated';

type wordpress__wp_taxonomiesFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly types: Maybe<StringQueryOperatorInput>;
  readonly hierarchical: Maybe<BooleanQueryOperatorInput>;
  readonly rest_base: Maybe<StringQueryOperatorInput>;
  readonly _links: Maybe<wordpress__wp_taxonomies_linksFilterInput>;
};

type wordpress__wp_taxonomiesGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__wp_taxonomiesEdge>;
  readonly nodes: ReadonlyArray<wordpress__wp_taxonomies>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__wp_taxonomiesSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__wp_taxonomiesFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type wordpress__wp_users = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly wordpress_id: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly avatar_urls: Maybe<wordpress__wp_usersAvatar_urls>;
  readonly _links: Maybe<wordpress__wp_users_links>;
  readonly all_authored_entities: Maybe<ReadonlyArray<Maybe<wordpress__PAGEwordpress__POSTUnion>>>;
  readonly authored_wordpress__POST: Maybe<ReadonlyArray<Maybe<wordpress__POST>>>;
  readonly authored_wordpress__PAGE: Maybe<ReadonlyArray<Maybe<wordpress__PAGE>>>;
  readonly path: Maybe<Scalars['String']>;
};

type wordpress__wp_users_links = {
  readonly self: Maybe<ReadonlyArray<Maybe<wordpress__wp_users_linksSelf>>>;
  readonly collection: Maybe<ReadonlyArray<Maybe<wordpress__wp_users_linksCollection>>>;
};

type wordpress__wp_users_linksCollection = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__wp_users_linksCollectionFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__wp_users_linksCollectionFilterListInput = {
  readonly elemMatch: Maybe<wordpress__wp_users_linksCollectionFilterInput>;
};

type wordpress__wp_users_linksFilterInput = {
  readonly self: Maybe<wordpress__wp_users_linksSelfFilterListInput>;
  readonly collection: Maybe<wordpress__wp_users_linksCollectionFilterListInput>;
};

type wordpress__wp_users_linksSelf = {
  readonly href: Maybe<Scalars['String']>;
};

type wordpress__wp_users_linksSelfFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
};

type wordpress__wp_users_linksSelfFilterListInput = {
  readonly elemMatch: Maybe<wordpress__wp_users_linksSelfFilterInput>;
};

type wordpress__wp_usersAvatar_urls = {
  readonly wordpress_24: Maybe<Scalars['String']>;
  readonly wordpress_48: Maybe<Scalars['String']>;
  readonly wordpress_96: Maybe<Scalars['String']>;
};

type wordpress__wp_usersAvatar_urlsFilterInput = {
  readonly wordpress_24: Maybe<StringQueryOperatorInput>;
  readonly wordpress_48: Maybe<StringQueryOperatorInput>;
  readonly wordpress_96: Maybe<StringQueryOperatorInput>;
};

type wordpress__wp_usersConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__wp_usersEdge>;
  readonly nodes: ReadonlyArray<wordpress__wp_users>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<wordpress__wp_usersGroupConnection>;
};


type wordpress__wp_usersConnection_distinctArgs = {
  field: wordpress__wp_usersFieldsEnum;
};


type wordpress__wp_usersConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: wordpress__wp_usersFieldsEnum;
};

type wordpress__wp_usersEdge = {
  readonly next: Maybe<wordpress__wp_users>;
  readonly node: wordpress__wp_users;
  readonly previous: Maybe<wordpress__wp_users>;
};

type wordpress__wp_usersFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'wordpress_id'
  | 'name'
  | 'url'
  | 'description'
  | 'link'
  | 'slug'
  | 'avatar_urls.wordpress_24'
  | 'avatar_urls.wordpress_48'
  | 'avatar_urls.wordpress_96'
  | '_links.self'
  | '_links.self.href'
  | '_links.collection'
  | '_links.collection.href'
  | 'authored_wordpress__POST'
  | 'authored_wordpress__POST.id'
  | 'authored_wordpress__POST.parent.id'
  | 'authored_wordpress__POST.parent.parent.id'
  | 'authored_wordpress__POST.parent.parent.children'
  | 'authored_wordpress__POST.parent.children'
  | 'authored_wordpress__POST.parent.children.id'
  | 'authored_wordpress__POST.parent.children.children'
  | 'authored_wordpress__POST.parent.internal.content'
  | 'authored_wordpress__POST.parent.internal.contentDigest'
  | 'authored_wordpress__POST.parent.internal.description'
  | 'authored_wordpress__POST.parent.internal.fieldOwners'
  | 'authored_wordpress__POST.parent.internal.ignoreType'
  | 'authored_wordpress__POST.parent.internal.mediaType'
  | 'authored_wordpress__POST.parent.internal.owner'
  | 'authored_wordpress__POST.parent.internal.type'
  | 'authored_wordpress__POST.children'
  | 'authored_wordpress__POST.children.id'
  | 'authored_wordpress__POST.children.parent.id'
  | 'authored_wordpress__POST.children.parent.children'
  | 'authored_wordpress__POST.children.children'
  | 'authored_wordpress__POST.children.children.id'
  | 'authored_wordpress__POST.children.children.children'
  | 'authored_wordpress__POST.children.internal.content'
  | 'authored_wordpress__POST.children.internal.contentDigest'
  | 'authored_wordpress__POST.children.internal.description'
  | 'authored_wordpress__POST.children.internal.fieldOwners'
  | 'authored_wordpress__POST.children.internal.ignoreType'
  | 'authored_wordpress__POST.children.internal.mediaType'
  | 'authored_wordpress__POST.children.internal.owner'
  | 'authored_wordpress__POST.children.internal.type'
  | 'authored_wordpress__POST.internal.content'
  | 'authored_wordpress__POST.internal.contentDigest'
  | 'authored_wordpress__POST.internal.description'
  | 'authored_wordpress__POST.internal.fieldOwners'
  | 'authored_wordpress__POST.internal.ignoreType'
  | 'authored_wordpress__POST.internal.mediaType'
  | 'authored_wordpress__POST.internal.owner'
  | 'authored_wordpress__POST.internal.type'
  | 'authored_wordpress__POST.wordpress_id'
  | 'authored_wordpress__POST.date'
  | 'authored_wordpress__POST.guid'
  | 'authored_wordpress__POST.modified'
  | 'authored_wordpress__POST.slug'
  | 'authored_wordpress__POST.status'
  | 'authored_wordpress__POST.type'
  | 'authored_wordpress__POST.link'
  | 'authored_wordpress__POST.title'
  | 'authored_wordpress__POST.content'
  | 'authored_wordpress__POST.excerpt'
  | 'authored_wordpress__POST.comment_status'
  | 'authored_wordpress__POST.ping_status'
  | 'authored_wordpress__POST.sticky'
  | 'authored_wordpress__POST.template'
  | 'authored_wordpress__POST.format'
  | 'authored_wordpress__POST._links.self'
  | 'authored_wordpress__POST._links.self.href'
  | 'authored_wordpress__POST._links.collection'
  | 'authored_wordpress__POST._links.collection.href'
  | 'authored_wordpress__POST._links.about'
  | 'authored_wordpress__POST._links.about.href'
  | 'authored_wordpress__POST._links.author'
  | 'authored_wordpress__POST._links.author.embeddable'
  | 'authored_wordpress__POST._links.author.href'
  | 'authored_wordpress__POST._links.replies'
  | 'authored_wordpress__POST._links.replies.embeddable'
  | 'authored_wordpress__POST._links.replies.href'
  | 'authored_wordpress__POST._links.version_history'
  | 'authored_wordpress__POST._links.version_history.count'
  | 'authored_wordpress__POST._links.version_history.href'
  | 'authored_wordpress__POST._links.wp_attachment'
  | 'authored_wordpress__POST._links.wp_attachment.href'
  | 'authored_wordpress__POST._links.wp_term'
  | 'authored_wordpress__POST._links.wp_term.taxonomy'
  | 'authored_wordpress__POST._links.wp_term.embeddable'
  | 'authored_wordpress__POST._links.wp_term.href'
  | 'authored_wordpress__POST._links.curies'
  | 'authored_wordpress__POST._links.curies.name'
  | 'authored_wordpress__POST._links.curies.href'
  | 'authored_wordpress__POST._links.curies.templated'
  | 'authored_wordpress__POST.author.id'
  | 'authored_wordpress__POST.author.parent.id'
  | 'authored_wordpress__POST.author.parent.children'
  | 'authored_wordpress__POST.author.children'
  | 'authored_wordpress__POST.author.children.id'
  | 'authored_wordpress__POST.author.children.children'
  | 'authored_wordpress__POST.author.internal.content'
  | 'authored_wordpress__POST.author.internal.contentDigest'
  | 'authored_wordpress__POST.author.internal.description'
  | 'authored_wordpress__POST.author.internal.fieldOwners'
  | 'authored_wordpress__POST.author.internal.ignoreType'
  | 'authored_wordpress__POST.author.internal.mediaType'
  | 'authored_wordpress__POST.author.internal.owner'
  | 'authored_wordpress__POST.author.internal.type'
  | 'authored_wordpress__POST.author.wordpress_id'
  | 'authored_wordpress__POST.author.name'
  | 'authored_wordpress__POST.author.url'
  | 'authored_wordpress__POST.author.description'
  | 'authored_wordpress__POST.author.link'
  | 'authored_wordpress__POST.author.slug'
  | 'authored_wordpress__POST.author.avatar_urls.wordpress_24'
  | 'authored_wordpress__POST.author.avatar_urls.wordpress_48'
  | 'authored_wordpress__POST.author.avatar_urls.wordpress_96'
  | 'authored_wordpress__POST.author._links.self'
  | 'authored_wordpress__POST.author._links.collection'
  | 'authored_wordpress__POST.author.authored_wordpress__POST'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.id'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.children'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.wordpress_id'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.date'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.guid'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.modified'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.slug'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.status'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.type'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.link'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.title'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.content'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.excerpt'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.comment_status'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.ping_status'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.sticky'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.template'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.format'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.categories'
  | 'authored_wordpress__POST.author.authored_wordpress__POST.path'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.id'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.children'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.wordpress_id'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.date'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.guid'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.modified'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.slug'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.status'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.type'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.link'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.title'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.content'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.excerpt'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.wordpress_parent'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.menu_order'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.comment_status'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.ping_status'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.template'
  | 'authored_wordpress__POST.author.authored_wordpress__PAGE.path'
  | 'authored_wordpress__POST.author.path'
  | 'authored_wordpress__POST.categories'
  | 'authored_wordpress__POST.categories.id'
  | 'authored_wordpress__POST.categories.parent.id'
  | 'authored_wordpress__POST.categories.parent.children'
  | 'authored_wordpress__POST.categories.children'
  | 'authored_wordpress__POST.categories.children.id'
  | 'authored_wordpress__POST.categories.children.children'
  | 'authored_wordpress__POST.categories.internal.content'
  | 'authored_wordpress__POST.categories.internal.contentDigest'
  | 'authored_wordpress__POST.categories.internal.description'
  | 'authored_wordpress__POST.categories.internal.fieldOwners'
  | 'authored_wordpress__POST.categories.internal.ignoreType'
  | 'authored_wordpress__POST.categories.internal.mediaType'
  | 'authored_wordpress__POST.categories.internal.owner'
  | 'authored_wordpress__POST.categories.internal.type'
  | 'authored_wordpress__POST.categories.wordpress_id'
  | 'authored_wordpress__POST.categories.count'
  | 'authored_wordpress__POST.categories.description'
  | 'authored_wordpress__POST.categories.link'
  | 'authored_wordpress__POST.categories.name'
  | 'authored_wordpress__POST.categories.slug'
  | 'authored_wordpress__POST.categories.wordpress_parent'
  | 'authored_wordpress__POST.categories._links.self'
  | 'authored_wordpress__POST.categories._links.collection'
  | 'authored_wordpress__POST.categories._links.about'
  | 'authored_wordpress__POST.categories._links.wp_post_type'
  | 'authored_wordpress__POST.categories._links.curies'
  | 'authored_wordpress__POST.categories.taxonomy.id'
  | 'authored_wordpress__POST.categories.taxonomy.children'
  | 'authored_wordpress__POST.categories.taxonomy.wordpress_id'
  | 'authored_wordpress__POST.categories.taxonomy.name'
  | 'authored_wordpress__POST.categories.taxonomy.slug'
  | 'authored_wordpress__POST.categories.taxonomy.description'
  | 'authored_wordpress__POST.categories.taxonomy.types'
  | 'authored_wordpress__POST.categories.taxonomy.hierarchical'
  | 'authored_wordpress__POST.categories.taxonomy.rest_base'
  | 'authored_wordpress__POST.categories.path'
  | 'authored_wordpress__POST.path'
  | 'authored_wordpress__PAGE'
  | 'authored_wordpress__PAGE.id'
  | 'authored_wordpress__PAGE.parent.id'
  | 'authored_wordpress__PAGE.parent.parent.id'
  | 'authored_wordpress__PAGE.parent.parent.children'
  | 'authored_wordpress__PAGE.parent.children'
  | 'authored_wordpress__PAGE.parent.children.id'
  | 'authored_wordpress__PAGE.parent.children.children'
  | 'authored_wordpress__PAGE.parent.internal.content'
  | 'authored_wordpress__PAGE.parent.internal.contentDigest'
  | 'authored_wordpress__PAGE.parent.internal.description'
  | 'authored_wordpress__PAGE.parent.internal.fieldOwners'
  | 'authored_wordpress__PAGE.parent.internal.ignoreType'
  | 'authored_wordpress__PAGE.parent.internal.mediaType'
  | 'authored_wordpress__PAGE.parent.internal.owner'
  | 'authored_wordpress__PAGE.parent.internal.type'
  | 'authored_wordpress__PAGE.children'
  | 'authored_wordpress__PAGE.children.id'
  | 'authored_wordpress__PAGE.children.parent.id'
  | 'authored_wordpress__PAGE.children.parent.children'
  | 'authored_wordpress__PAGE.children.children'
  | 'authored_wordpress__PAGE.children.children.id'
  | 'authored_wordpress__PAGE.children.children.children'
  | 'authored_wordpress__PAGE.children.internal.content'
  | 'authored_wordpress__PAGE.children.internal.contentDigest'
  | 'authored_wordpress__PAGE.children.internal.description'
  | 'authored_wordpress__PAGE.children.internal.fieldOwners'
  | 'authored_wordpress__PAGE.children.internal.ignoreType'
  | 'authored_wordpress__PAGE.children.internal.mediaType'
  | 'authored_wordpress__PAGE.children.internal.owner'
  | 'authored_wordpress__PAGE.children.internal.type'
  | 'authored_wordpress__PAGE.internal.content'
  | 'authored_wordpress__PAGE.internal.contentDigest'
  | 'authored_wordpress__PAGE.internal.description'
  | 'authored_wordpress__PAGE.internal.fieldOwners'
  | 'authored_wordpress__PAGE.internal.ignoreType'
  | 'authored_wordpress__PAGE.internal.mediaType'
  | 'authored_wordpress__PAGE.internal.owner'
  | 'authored_wordpress__PAGE.internal.type'
  | 'authored_wordpress__PAGE.wordpress_id'
  | 'authored_wordpress__PAGE.date'
  | 'authored_wordpress__PAGE.guid'
  | 'authored_wordpress__PAGE.modified'
  | 'authored_wordpress__PAGE.slug'
  | 'authored_wordpress__PAGE.status'
  | 'authored_wordpress__PAGE.type'
  | 'authored_wordpress__PAGE.link'
  | 'authored_wordpress__PAGE.title'
  | 'authored_wordpress__PAGE.content'
  | 'authored_wordpress__PAGE.excerpt'
  | 'authored_wordpress__PAGE.wordpress_parent'
  | 'authored_wordpress__PAGE.menu_order'
  | 'authored_wordpress__PAGE.comment_status'
  | 'authored_wordpress__PAGE.ping_status'
  | 'authored_wordpress__PAGE.template'
  | 'authored_wordpress__PAGE._links.self'
  | 'authored_wordpress__PAGE._links.self.href'
  | 'authored_wordpress__PAGE._links.collection'
  | 'authored_wordpress__PAGE._links.collection.href'
  | 'authored_wordpress__PAGE._links.about'
  | 'authored_wordpress__PAGE._links.about.href'
  | 'authored_wordpress__PAGE._links.author'
  | 'authored_wordpress__PAGE._links.author.embeddable'
  | 'authored_wordpress__PAGE._links.author.href'
  | 'authored_wordpress__PAGE._links.replies'
  | 'authored_wordpress__PAGE._links.replies.embeddable'
  | 'authored_wordpress__PAGE._links.replies.href'
  | 'authored_wordpress__PAGE._links.version_history'
  | 'authored_wordpress__PAGE._links.version_history.count'
  | 'authored_wordpress__PAGE._links.version_history.href'
  | 'authored_wordpress__PAGE._links.predecessor_version'
  | 'authored_wordpress__PAGE._links.predecessor_version.wordpress_id'
  | 'authored_wordpress__PAGE._links.predecessor_version.href'
  | 'authored_wordpress__PAGE._links.up'
  | 'authored_wordpress__PAGE._links.up.embeddable'
  | 'authored_wordpress__PAGE._links.up.href'
  | 'authored_wordpress__PAGE._links.wp_attachment'
  | 'authored_wordpress__PAGE._links.wp_attachment.href'
  | 'authored_wordpress__PAGE._links.curies'
  | 'authored_wordpress__PAGE._links.curies.name'
  | 'authored_wordpress__PAGE._links.curies.href'
  | 'authored_wordpress__PAGE._links.curies.templated'
  | 'authored_wordpress__PAGE.author.id'
  | 'authored_wordpress__PAGE.author.parent.id'
  | 'authored_wordpress__PAGE.author.parent.children'
  | 'authored_wordpress__PAGE.author.children'
  | 'authored_wordpress__PAGE.author.children.id'
  | 'authored_wordpress__PAGE.author.children.children'
  | 'authored_wordpress__PAGE.author.internal.content'
  | 'authored_wordpress__PAGE.author.internal.contentDigest'
  | 'authored_wordpress__PAGE.author.internal.description'
  | 'authored_wordpress__PAGE.author.internal.fieldOwners'
  | 'authored_wordpress__PAGE.author.internal.ignoreType'
  | 'authored_wordpress__PAGE.author.internal.mediaType'
  | 'authored_wordpress__PAGE.author.internal.owner'
  | 'authored_wordpress__PAGE.author.internal.type'
  | 'authored_wordpress__PAGE.author.wordpress_id'
  | 'authored_wordpress__PAGE.author.name'
  | 'authored_wordpress__PAGE.author.url'
  | 'authored_wordpress__PAGE.author.description'
  | 'authored_wordpress__PAGE.author.link'
  | 'authored_wordpress__PAGE.author.slug'
  | 'authored_wordpress__PAGE.author.avatar_urls.wordpress_24'
  | 'authored_wordpress__PAGE.author.avatar_urls.wordpress_48'
  | 'authored_wordpress__PAGE.author.avatar_urls.wordpress_96'
  | 'authored_wordpress__PAGE.author._links.self'
  | 'authored_wordpress__PAGE.author._links.collection'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.id'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.children'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.wordpress_id'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.date'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.guid'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.modified'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.slug'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.status'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.type'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.link'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.title'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.content'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.excerpt'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.comment_status'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.ping_status'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.sticky'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.template'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.format'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.categories'
  | 'authored_wordpress__PAGE.author.authored_wordpress__POST.path'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.id'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.children'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.wordpress_id'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.date'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.guid'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.modified'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.slug'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.status'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.type'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.link'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.title'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.content'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.excerpt'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.wordpress_parent'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.menu_order'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.comment_status'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.ping_status'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.template'
  | 'authored_wordpress__PAGE.author.authored_wordpress__PAGE.path'
  | 'authored_wordpress__PAGE.author.path'
  | 'authored_wordpress__PAGE.parent_element.id'
  | 'authored_wordpress__PAGE.parent_element.parent.id'
  | 'authored_wordpress__PAGE.parent_element.parent.children'
  | 'authored_wordpress__PAGE.parent_element.children'
  | 'authored_wordpress__PAGE.parent_element.children.id'
  | 'authored_wordpress__PAGE.parent_element.children.children'
  | 'authored_wordpress__PAGE.parent_element.internal.content'
  | 'authored_wordpress__PAGE.parent_element.internal.contentDigest'
  | 'authored_wordpress__PAGE.parent_element.internal.description'
  | 'authored_wordpress__PAGE.parent_element.internal.fieldOwners'
  | 'authored_wordpress__PAGE.parent_element.internal.ignoreType'
  | 'authored_wordpress__PAGE.parent_element.internal.mediaType'
  | 'authored_wordpress__PAGE.parent_element.internal.owner'
  | 'authored_wordpress__PAGE.parent_element.internal.type'
  | 'authored_wordpress__PAGE.parent_element.wordpress_id'
  | 'authored_wordpress__PAGE.parent_element.date'
  | 'authored_wordpress__PAGE.parent_element.guid'
  | 'authored_wordpress__PAGE.parent_element.modified'
  | 'authored_wordpress__PAGE.parent_element.slug'
  | 'authored_wordpress__PAGE.parent_element.status'
  | 'authored_wordpress__PAGE.parent_element.type'
  | 'authored_wordpress__PAGE.parent_element.link'
  | 'authored_wordpress__PAGE.parent_element.title'
  | 'authored_wordpress__PAGE.parent_element.content'
  | 'authored_wordpress__PAGE.parent_element.excerpt'
  | 'authored_wordpress__PAGE.parent_element.wordpress_parent'
  | 'authored_wordpress__PAGE.parent_element.menu_order'
  | 'authored_wordpress__PAGE.parent_element.comment_status'
  | 'authored_wordpress__PAGE.parent_element.ping_status'
  | 'authored_wordpress__PAGE.parent_element.template'
  | 'authored_wordpress__PAGE.parent_element._links.self'
  | 'authored_wordpress__PAGE.parent_element._links.collection'
  | 'authored_wordpress__PAGE.parent_element._links.about'
  | 'authored_wordpress__PAGE.parent_element._links.author'
  | 'authored_wordpress__PAGE.parent_element._links.replies'
  | 'authored_wordpress__PAGE.parent_element._links.version_history'
  | 'authored_wordpress__PAGE.parent_element._links.predecessor_version'
  | 'authored_wordpress__PAGE.parent_element._links.up'
  | 'authored_wordpress__PAGE.parent_element._links.wp_attachment'
  | 'authored_wordpress__PAGE.parent_element._links.curies'
  | 'authored_wordpress__PAGE.parent_element.author.id'
  | 'authored_wordpress__PAGE.parent_element.author.children'
  | 'authored_wordpress__PAGE.parent_element.author.wordpress_id'
  | 'authored_wordpress__PAGE.parent_element.author.name'
  | 'authored_wordpress__PAGE.parent_element.author.url'
  | 'authored_wordpress__PAGE.parent_element.author.description'
  | 'authored_wordpress__PAGE.parent_element.author.link'
  | 'authored_wordpress__PAGE.parent_element.author.slug'
  | 'authored_wordpress__PAGE.parent_element.author.authored_wordpress__POST'
  | 'authored_wordpress__PAGE.parent_element.author.authored_wordpress__PAGE'
  | 'authored_wordpress__PAGE.parent_element.author.path'
  | 'authored_wordpress__PAGE.parent_element.parent_element.id'
  | 'authored_wordpress__PAGE.parent_element.parent_element.children'
  | 'authored_wordpress__PAGE.parent_element.parent_element.wordpress_id'
  | 'authored_wordpress__PAGE.parent_element.parent_element.date'
  | 'authored_wordpress__PAGE.parent_element.parent_element.guid'
  | 'authored_wordpress__PAGE.parent_element.parent_element.modified'
  | 'authored_wordpress__PAGE.parent_element.parent_element.slug'
  | 'authored_wordpress__PAGE.parent_element.parent_element.status'
  | 'authored_wordpress__PAGE.parent_element.parent_element.type'
  | 'authored_wordpress__PAGE.parent_element.parent_element.link'
  | 'authored_wordpress__PAGE.parent_element.parent_element.title'
  | 'authored_wordpress__PAGE.parent_element.parent_element.content'
  | 'authored_wordpress__PAGE.parent_element.parent_element.excerpt'
  | 'authored_wordpress__PAGE.parent_element.parent_element.wordpress_parent'
  | 'authored_wordpress__PAGE.parent_element.parent_element.menu_order'
  | 'authored_wordpress__PAGE.parent_element.parent_element.comment_status'
  | 'authored_wordpress__PAGE.parent_element.parent_element.ping_status'
  | 'authored_wordpress__PAGE.parent_element.parent_element.template'
  | 'authored_wordpress__PAGE.parent_element.parent_element.path'
  | 'authored_wordpress__PAGE.parent_element.path'
  | 'authored_wordpress__PAGE.parent_element.acf.github'
  | 'authored_wordpress__PAGE.path'
  | 'authored_wordpress__PAGE.acf.github'
  | 'path';

type wordpress__wp_usersFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly wordpress_id: Maybe<IntQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly avatar_urls: Maybe<wordpress__wp_usersAvatar_urlsFilterInput>;
  readonly _links: Maybe<wordpress__wp_users_linksFilterInput>;
  readonly authored_wordpress__POST: Maybe<wordpress__POSTFilterListInput>;
  readonly authored_wordpress__PAGE: Maybe<wordpress__PAGEFilterListInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
};

type wordpress__wp_usersGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<wordpress__wp_usersEdge>;
  readonly nodes: ReadonlyArray<wordpress__wp_users>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type wordpress__wp_usersSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<wordpress__wp_usersFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type homenevermindLocalSitesgatsbywordpresstestapppublicgatsbyWordpressTestsrccomponentsimageTsx1132682437QueryVariables = Exact<{ [key: string]: never; }>;


type homenevermindLocalSitesgatsbywordpresstestapppublicgatsbyWordpressTestsrccomponentsimageTsx1132682437Query = { readonly placeholderImage: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

type homenevermindLocalSitesgatsbywordpresstestapppublicgatsbyWordpressTestsrccomponentsseoJs63159454QueryVariables = Exact<{ [key: string]: never; }>;


type homenevermindLocalSitesgatsbywordpresstestapppublicgatsbyWordpressTestsrccomponentsseoJs63159454Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

type homenevermindLocalSitesgatsbywordpresstestapppublicgatsbyWordpressTestsrcpagesusingTypescriptTsx2907560070QueryVariables = Exact<{ [key: string]: never; }>;


type homenevermindLocalSitesgatsbywordpresstestapppublicgatsbyWordpressTestsrcpagesusingTypescriptTsx2907560070Query = { readonly site: Maybe<Pick<Site, 'buildTime'>> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

}