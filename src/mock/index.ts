import asketaImg from 'assets/images/asketa.png';
import lunarImg from 'assets/images/lunar.png';
import menuImg from 'assets/images/menu.png';
import nastanImg from 'assets/images/nastan.png';
import tatranImg from 'assets/images/tatran.png';
import viloraImg from 'assets/images/vilora.png';

export interface IMockProduct {
  id: number;
  category: string;
  model: string;
  description: string;
  price: number;
  imgSrc: string;
}

export const mockProducts: IMockProduct[] = [
  {
    id: 0,
    category: 'Кровать',
    model: 'TATRAN',
    description:
      'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
    price: 120000,
    imgSrc: tatranImg,
  },
  {
    id: 1,
    category: 'Кресло',
    model: 'VILORA',
    description:
      'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.',
    price: 21000,
    imgSrc: viloraImg,
  },
  {
    id: 2,
    category: 'Стол',
    model: 'MENU',
    description: 'Европейский дуб - отличается особой прочностью и стабильностью.',
    price: 34000,
    imgSrc: menuImg,
  },
  {
    id: 3,
    category: 'Диван',
    model: 'ASKETA',
    description:
      'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
    price: 68000,
    imgSrc: asketaImg,
  },
  {
    id: 4,
    category: 'Кресло',
    model: 'LUNAR',
    description: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',
    price: 40000,
    imgSrc: lunarImg,
  },
  {
    id: 5,
    category: 'Шкаф',
    model: 'Nastan',
    description: 'Мебель может быть оснащена разнообразными системами подсветки.',
    price: 80000,
    imgSrc: nastanImg,
  },
];
