import slugify from 'limax';

import { SITE } from 'astrowind:config';

import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/** */
export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  if (
    slug.startsWith('https://') ||
    slug.startsWith('http://') ||
    slug.startsWith('://') ||
    slug.startsWith('#') ||
    slug.startsWith('javascript:')
  ) {
    return slug;
  }

  switch (type) {
    case 'home':
      permalink = getHomePermalink();
      break;

    case 'asset':
      permalink = getAsset(slug);
      break;

    case 'page':
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (): string => getPermalink('/');

/** */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** */
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);

/** */
export const applyGetPermalinks = (menu: unknown = {}): unknown => {
  if (Array.isArray(menu)) {
    return menu.map((item) => applyGetPermalinks(item));
  } else if (typeof menu === 'object' && menu !== null) {
    const obj: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(menu)) {
      if (key === 'href') {
        if (typeof value === 'string') {
          obj[key] = getPermalink(value);
        } else if (typeof value === 'object' && value !== null) {
          const link = value as { type?: string; url?: string };
          if (link.type === 'home') {
            obj[key] = getHomePermalink();
          } else if (link.type === 'asset') {
            obj[key] = getAsset(link.url ?? '');
          } else if (link.url) {
            obj[key] = getPermalink(link.url, link.type);
          }
        }
      } else {
        obj[key] = applyGetPermalinks(value);
      }
    }
    return obj;
  }
  return menu;
};
