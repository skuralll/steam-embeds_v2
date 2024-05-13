import { WidgetParams } from '@/types/Widget';

export const getEmbedsCode = (params: WidgetParams) => {
  if (
    params == undefined ||
    params.steamId == undefined ||
    isNaN(params.num) ||
    isNaN(params.width) ||
    isNaN(params.height)
  ) {
    return '<span>無効なパラメータ</span>';
  }
  return `<iframe src="${import.meta.env.VITE_BASE_URL}/widget?id=${params.steamId}&num=${params.num}" width="${params.width}" height="${params.height}"></iframe>`;
};
