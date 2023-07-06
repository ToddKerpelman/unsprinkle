import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  // Take the src are remove the file extension
  const rootSrc = src.replace(/\.[^/.]+$/, "");
  // Add the srcset attributes for all 3 resolutions
  const srcSetAvif = `
    ${rootSrc}.avif 1x,
    ${rootSrc}@2x.avif 2x,
    ${rootSrc}@3x.avif 3x`;
  const srcSetJpeg = `
    ${rootSrc}.jpg 1x,
    ${rootSrc}@2x.jpg 2x,
    ${rootSrc}@3x.jpg 3x`;

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={srcSetAvif} />
          <source type="image/jpeg" srcSet={srcSetJpeg} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>
            <span>{tag}</span>
          </Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-bottom: 8px;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  margin-right: 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
