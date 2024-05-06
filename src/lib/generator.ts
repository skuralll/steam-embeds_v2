import { WidgetParams } from '@/types/Widget';

export const getEmbedsCode = (params: WidgetParams) => {
  if (params == undefined) {
    return '<span>無効なパラメータ</span>';
  }
  return `<iframe src="${import.meta.env.VITE_BASE_URL}/widget?id=${params.steamid}&num=${params.num}" width="${params.width}" height="${params.height}"></iframe>`;
};
