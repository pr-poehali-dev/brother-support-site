import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DiaryEntry {
  id: string;
  date: string;
  content: string;
}

const Index = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([
    {
      id: '1',
      date: new Date().toLocaleDateString('ru-RU'),
      content: 'Начни писать свои мысли здесь...'
    }
  ]);
  const [currentEntry, setCurrentEntry] = useState('');

  const gallery = [
    { id: 1, url: 'https://cdn.poehali.dev/files/photo_2022-06-23_23-16-08.jpg', title: 'За заслуги', description: 'Памятный знак за активную военно-патриотическую работу' },
    { id: 2, url: 'https://cdn.poehali.dev/files/photo_2022-07-06_13-49-03.jpg', title: 'В движении', description: 'Каждый шаг — это прогресс' },
    { id: 3, url: 'https://cdn.poehali.dev/files/photo_2022-10-16_18-38-12.jpg', title: 'Служба Родине', description: 'Гордость и честь нести форму' },
    { id: 4, url: 'https://cdn.poehali.dev/files/photo_2022-12-20_11-14-39.jpg', title: 'Признание заслуг', description: 'Благодарность за вклад в развитие молодёжи' },
    { id: 5, url: 'https://cdn.poehali.dev/files/photo_2022-12-23_16-17-02.jpg', title: 'Командный успех', description: 'Вместе к победе!' },
    { id: 6, url: 'https://cdn.poehali.dev/files/photo_2022-12-27_11-28-29.jpg', title: 'Братство', description: 'Единство и взаимопомощь' },
    { id: 7, url: 'https://cdn.poehali.dev/files/photo_2022-12-27_11-28-30.jpg', title: 'На посту', description: 'Ответственность за общее дело' },
    { id: 8, url: 'https://cdn.poehali.dev/files/photo_2023-07-01_16-18-52.jpg', title: 'Новая жизнь', description: 'Начало самого важного пути' },
    { id: 9, url: 'https://cdn.poehali.dev/files/photo_2023-07-17_16-21-01.jpg', title: 'Первые дни', description: 'Счастье держать на руках' },
    { id: 10, url: 'https://cdn.poehali.dev/files/photo_2023-08-01_21-11-32.jpg', title: 'Радость', description: 'Улыбки самых дорогих людей' },
    { id: 11, url: 'https://cdn.poehali.dev/files/photo_2024-01-29_21-30-20.jpg', title: 'Папа и дочь', description: 'Бесценные моменты' },
    { id: 12, url: 'https://cdn.poehali.dev/files/photo_2024-04-20_16-18-24.jpg', title: 'Профессионализм', description: 'Деловая встреча и новые перспективы' },
    { id: 13, url: 'https://cdn.poehali.dev/files/photo_2024-05-07_08-34-46.jpg', title: 'Семейное тепло', description: 'Самые дорогие объятия' },
    { id: 14, url: 'https://cdn.poehali.dev/files/photo_2024-05-25_21-38-03.jpg', title: 'Почётный караул', description: 'Служить с честью' },
    { id: 15, url: 'https://cdn.poehali.dev/files/photo_2024-07-27_16-25-16.jpg', title: 'Память героев', description: 'Чтим подвиг предков' },
    { id: 16, url: 'https://cdn.poehali.dev/files/photo_2024-10-05_17-29-43.jpg', title: 'Отцовство', description: 'Главная роль в жизни' },
    { id: 17, url: 'https://cdn.poehali.dev/files/photo_2024-11-02_16-38-05.jpg', title: 'Единомышленники', description: 'Вместе мы — сила' },
    { id: 18, url: 'https://cdn.poehali.dev/files/photo_2024-11-04_19-48-15.jpg', title: 'Новые вершины', description: 'Встречи, которые меняют жизнь' },
    { id: 19, url: 'https://cdn.poehali.dev/files/photo_2024-11-05_22-01-07.jpg', title: 'За патриотизм', description: 'Награда за активную работу' },
    { id: 20, url: 'https://cdn.poehali.dev/files/photo_2024-11-05_22-01-18.jpg', title: 'Медаль', description: 'Знак признания заслуг' },
    { id: 21, url: 'https://cdn.poehali.dev/files/photo_2024-12-12_21-13-24.jpg', title: 'Семейный вечер', description: 'Простые моменты счастья' },
    { id: 22, url: 'https://cdn.poehali.dev/files/photo_2025-01-22_21-08-17.jpg', title: 'Испытание морозом', description: 'Сила характера' },
    { id: 23, url: 'https://cdn.poehali.dev/files/photo_2025-04-23_09-20-39%20(2).jpg', title: 'Достижения', description: 'Награды за труд и упорство' },
    { id: 24, url: 'https://cdn.poehali.dev/files/photo_2025-04-23_09-20-39.jpg', title: 'Победитель', description: 'Первое место в конкурсе' },
    { id: 25, url: 'https://cdn.poehali.dev/files/photo_2025-06-30_21-07-19.jpg', title: 'Семья — всё', description: 'Главное богатство' },
    { id: 26, url: 'https://cdn.poehali.dev/files/photo_2025-07-22_10-11-16.jpg', title: 'На форуме', description: 'Обмен опытом' },
    { id: 27, url: 'https://cdn.poehali.dev/files/photo_2025-10-19_14-15-13.jpg', title: 'Братья', description: 'Семейные узы' },
    { id: 28, url: 'https://cdn.poehali.dev/files/photo_2025-11-12_00-09-52.jpg', title: 'Выступление', description: 'Делиться знаниями' },
    { id: 29, url: 'https://cdn.poehali.dev/files/photo_2025-11-26_00-58-41.jpg', title: 'Оратор', description: 'Вести за собой' },
    { id: 30, url: 'https://cdn.poehali.dev/files/photo_2025-12-02_08-56-25%20(2).jpg', title: 'Юность', description: 'Начало большого пути' },
    { id: 31, url: 'https://cdn.poehali.dev/files/photo_2025-12-02_08-56-25.jpg', title: 'Обучение', description: 'Знания — основа будущего' }
  ];



  const quotes = [
    {
      text: 'Ты сильнее, чем думаешь. Каждый день — это новая возможность доказать это себе.',
      author: 'Из сердца',
      category: 'Сила'
    },
    {
      text: 'Помни: падать — это нормально. Главное — каждый раз подниматься.',
      author: 'Твоя поддержка',
      category: 'Стойкость'
    },
    {
      text: 'Твой путь уникален. Не сравнивай себя с другими — сравнивай себя вчерашнего с собой сегодняшним.',
      author: 'Мудрость жизни',
      category: 'Рост'
    },
    {
      text: 'Трудности — это не препятствия, а ступени к твоей цели. Каждая проблема делает тебя опытнее.',
      author: 'Жизненный опыт',
      category: 'Преодоление'
    },
    {
      text: 'Не бойся ошибаться. Ошибки — это уроки, которые приближают тебя к успеху.',
      author: 'Путь к мастерству',
      category: 'Обучение'
    },
    {
      text: 'Ты уже прошёл через многое. Если смог тогда, сможешь и сейчас.',
      author: 'Твоя история',
      category: 'Уверенность'
    },
    {
      text: 'Верь в себя даже тогда, когда никто не верит. Твоя вера — это твоя сила.',
      author: 'Внутренний голос',
      category: 'Вера'
    },
    {
      text: 'Маленькие шаги каждый день приводят к большим результатам. Продолжай двигаться.',
      author: 'Мудрость пути',
      category: 'Постоянство'
    },
    {
      text: 'Ты достоин счастья, успеха и любви. Не позволяй никому говорить тебе обратное.',
      author: 'Из сердца',
      category: 'Самоценность'
    },
    {
      text: 'Твои мечты реальны. Просто нужно время и усилия, чтобы превратить их в жизнь.',
      author: 'Вера в будущее',
      category: 'Мечты'
    },
    {
      text: 'Когда кажется, что силы на исходе — помни, для чего ты начал. Твоя цель стоит усилий.',
      author: 'Источник мотивации',
      category: 'Цель'
    },
    {
      text: 'Ты не один. Всегда есть те, кто верит в тебя и поддерживает на каждом шагу.',
      author: 'Твоя опора',
      category: 'Поддержка'
    },
    {
      text: 'Плохие дни временны. Хорошие дни обязательно придут. Держись.',
      author: 'Надежда',
      category: 'Надежда'
    },
    {
      text: 'Твоя ценность не зависит от мнения других. Ты ценен просто потому, что ты — это ты.',
      author: 'Самопринятие',
      category: 'Ценность'
    },
    {
      text: 'Не сдавайся за день до чуда. Твой прорыв может быть уже завтра.',
      author: 'Терпение',
      category: 'Надежда'
    },
    {
      text: 'Каждый раз, когда ты встаёшь после падения, ты становишься сильнее. Ты — боец.',
      author: 'Сила духа',
      category: 'Стойкость'
    },
    { text: 'Жизнь измеряется не количеством вдохов, а моментами, которые захватывают дух.', author: 'Мудрость', category: 'Жизнь' },
    { text: 'Самая большая слава не в том, чтобы никогда не падать, а в том, чтобы подниматься каждый раз.', author: 'Конфуций', category: 'Стойкость' },
    { text: 'Начни там, где ты сейчас. Используй то, что у тебя есть. Делай всё, что можешь.', author: 'Артур Эш', category: 'Действие' },
    { text: 'Твоё время ограничено, не трать его на чужую жизнь.', author: 'Стив Джобс', category: 'Время' },
    { text: 'Единственный способ делать великую работу — любить то, что делаешь.', author: 'Стив Джобс', category: 'Призвание' },
    { text: 'Не важно, как медленно ты идёшь, пока ты не останавливаешься.', author: 'Конфуций', category: 'Упорство' },
    { text: 'Будущее принадлежит тем, кто верит в красоту своих мечтаний.', author: 'Элеонора Рузвельт', category: 'Мечты' },
    { text: 'Успех — это способность идти от одной неудачи к другой, не теряя энтузиазма.', author: 'Уинстон Черчилль', category: 'Успех' },
    { text: 'Всё, что ты можешь вообразить — реально.', author: 'Пабло Пикассо', category: 'Воображение' },
    { text: 'Изменения — закон жизни. Те, кто смотрит только в прошлое или настоящее, упустят будущее.', author: 'Джон Кеннеди', category: 'Изменения' },
    { text: 'Лучший способ предсказать будущее — создать его.', author: 'Питер Друкер', category: 'Будущее' },
    { text: 'Я не проиграл. Я просто нашёл 10000 способов, которые не работают.', author: 'Томас Эдисон', category: 'Опыт' },
    { text: 'Счастье — это не нечто готовое. Оно приходит от твоих собственных действий.', author: 'Далай-лама', category: 'Счастье' },
    { text: 'Если ты хочешь изменить мир, начни с себя.', author: 'Махатма Ганди', category: 'Изменения' },
    { text: 'Кто хочет — ищет возможности. Кто не хочет — ищет причины.', author: 'Сократ', category: 'Мотивация' },
    { text: 'Страх — это иллюзия. Единственное, чего стоит бояться — самого страха.', author: 'Франклин Рузвельт', category: 'Смелость' },
    { text: 'Победа над собой — величайшая из побед.', author: 'Платон', category: 'Саморазвитие' },
    { text: 'Препятствия — это те страшные вещи, которые видишь, когда сводишь глаза с цели.', author: 'Генри Форд', category: 'Цель' },
    { text: 'Трудности закаляют на пути к успеху.', author: 'Народная мудрость', category: 'Испытания' },
    { text: 'Сегодня ты на шаг ближе, чем был вчера.', author: 'Путь героя', category: 'Прогресс' },
    { text: 'Не жди идеального момента. Возьми момент и сделай его идеальным.', author: 'Мотивация', category: 'Действие' },
    { text: 'Ты либо контролируешь свой день, либо день контролирует тебя.', author: 'Джим Рон', category: 'Дисциплина' },
    { text: 'Важно не то, что с тобой происходит, а то, как ты на это реагируешь.', author: 'Эпиктет', category: 'Отношение' },
    { text: 'Мужество — это не отсутствие страха, а победа над ним.', author: 'Нельсон Мандела', category: 'Смелость' },
    { text: 'То, что не убивает нас, делает нас сильнее.', author: 'Фридрих Ницше', category: 'Сила' },
    { text: 'Делай сегодня то, что другие не хотят, завтра будешь жить так, как другие не могут.', author: 'Джаред Лето', category: 'Труд' },
    { text: 'Никогда не поздно стать тем, кем ты мог бы быть.', author: 'Джордж Элиот', category: 'Возможности' },
    { text: 'Боль временна. Гордость за достижение — навсегда.', author: 'Спорт', category: 'Достижения' },
    { text: 'Не бойся отказываться от хорошего ради великого.', author: 'Джон Рокфеллер', category: 'Амбиции' },
    { text: 'Каждый мастер когда-то был новичком.', author: 'Робин Шарма', category: 'Начало' },
    { text: 'Твой единственный предел — это ты сам.', author: 'Мотивация', category: 'Возможности' },
    { text: 'Отличие между мечтой и целью — дата.', author: 'Харви Маккей', category: 'Планирование' },
    { text: 'Не останавливайся, пока не станешь гордиться собой.', author: 'Фитнес-мотивация', category: 'Гордость' },
    { text: 'Чемпионы делают то, что должны, независимо от того, хотят они или нет.', author: 'Спорт', category: 'Дисциплина' },
    { text: 'Борись за свои мечты. Если не ты, то кто?', author: 'Мотивация', category: 'Мечты' },
    { text: 'Твоя жизнь — твоё послание миру. Сделай его вдохновляющим.', author: 'Лоррейн Хэнсберри', category: 'Наследие' },
    { text: 'Успех — это сумма маленьких усилий, повторяемых день за днём.', author: 'Роберт Кольер', category: 'Постоянство' },
    { text: 'Ты сильнее своих сомнений. Докажи это.', author: 'Внутренний воин', category: 'Уверенность' },
    { text: 'Не ищи лёгких путей. Ищи достойных целей.', author: 'Мудрость воина', category: 'Цель' },
    { text: 'Упал семь раз — встань восемь.', author: 'Японская пословица', category: 'Стойкость' },
    { text: 'Сильные люди не сдаются. Они отдыхают, анализируют и продолжают.', author: 'Психология успеха', category: 'Стратегия' },
    { text: 'Иногда позже становится никогда. Делай это сейчас.', author: 'Мотивация', category: 'Действие' },
    { text: 'Твои действия сегодня — твоё будущее завтра.', author: 'Карма', category: 'Ответственность' },
    { text: 'Пусть каждый день станет шагом к лучшей версии себя.', author: 'Саморазвитие', category: 'Рост' },
    { text: 'Ты не обязан быть великим, чтобы начать. Но ты должен начать, чтобы стать великим.', author: 'Зиг Зиглар', category: 'Начало' },
    { text: 'Самое трудное время — лучшее время, чтобы не сдаваться.', author: 'Стойкость', category: 'Испытания' },
    { text: 'Твоя история ещё не закончена. Продолжай писать.', author: 'Жизнь', category: 'Продолжение' },
    { text: 'Ветер не меняет направление. Меняй паруса.', author: 'Латинская мудрость', category: 'Адаптация' },
    { text: 'Верь в себя так сильно, чтобы мир не мог не поверить вместе с тобой.', author: 'Вера', category: 'Уверенность' }
  ];

  const milestones = [
    {
      title: 'Начало пути',
      description: 'Было сложно сделать первый шаг, но ты решился. Это требовало смелости.',
      icon: 'Sprout',
      color: 'bg-green-100 text-green-700'
    },
    {
      title: 'Первое препятствие',
      description: 'Казалось, что не получится. Но ты не сдался и нашёл решение.',
      icon: 'Mountain',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      title: 'Рост и развитие',
      description: 'День за днём ты становился сильнее. Результаты стали заметны.',
      icon: 'TrendingUp',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Новые высоты',
      description: 'Сегодня ты там, где раньше только мечтал быть. И это только начало.',
      icon: 'Trophy',
      color: 'bg-yellow-100 text-yellow-700'
    }
  ];

  const handleSaveEntry = () => {
    if (currentEntry.trim()) {
      const newEntry: DiaryEntry = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('ru-RU', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        }),
        content: currentEntry
      };
      setDiaryEntries([newEntry, ...diaryEntries.filter(e => e.content !== 'Начни писать свои мысли здесь...')]);
      setCurrentEntry('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDE1D3] via-[#FFDEE2] to-[#F2FCE2]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 shadow-lg">
            <Icon name="Heart" size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-3">Ты можешь всё</h1>
          <p className="text-xl text-muted-foreground">Твоё личное пространство поддержки и вдохновения</p>
        </header>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Icon name="Images" size={16} />
              <span className="hidden sm:inline">Фото</span>
            </TabsTrigger>
            <TabsTrigger value="quotes" className="flex items-center gap-2">
              <Icon name="MessageCircle" size={16} />
              <span className="hidden sm:inline">Слова</span>
            </TabsTrigger>
            <TabsTrigger value="journey" className="flex items-center gap-2">
              <Icon name="Map" size={16} />
              <span className="hidden sm:inline">Путь</span>
            </TabsTrigger>
            <TabsTrigger value="diary" className="flex items-center gap-2">
              <Icon name="BookOpen" size={16} />
              <span className="hidden sm:inline">Дневник</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Моменты жизни</h2>
              <p className="text-muted-foreground">Каждое фото — это история, каждая история — это шаг вперёд</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((photo, index) => (
                <Card 
                  key={photo.id}
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] bg-white/90 backdrop-blur-sm animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
                      <p className="text-sm text-white/90">{photo.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>



          <TabsContent value="quotes" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Слова поддержки</h2>
              <p className="text-muted-foreground">Когда нужна мотивация — вспомни эти слова</p>
            </div>
            <div className="grid gap-5">
              {quotes.map((quote, index) => (
                <Card 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-l-4 border-primary hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Icon name="Quote" size={24} className="text-primary opacity-50 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-lg text-foreground mb-3 leading-relaxed font-medium italic">
                          "{quote.text}"
                        </p>
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Icon name="Heart" size={14} className="text-primary" />
                            {quote.author}
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            {quote.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="journey" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Твоя история</h2>
              <p className="text-muted-foreground">Путь, который ты прошёл — это подвиг</p>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Card className="ml-0 md:ml-20 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`hidden md:flex absolute -left-20 w-16 h-16 rounded-full ${milestone.color} items-center justify-center shadow-lg`}>
                            <Icon name={milestone.icon as any} size={28} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`md:hidden flex w-12 h-12 rounded-full ${milestone.color} items-center justify-center`}>
                                <Icon name={milestone.icon as any} size={20} />
                              </div>
                              <h3 className="text-2xl font-semibold text-foreground">{milestone.title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="diary" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Личный дневник</h2>
              <p className="text-muted-foreground">Записывай свои мысли, достижения и размышления</p>
            </div>
            
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="PenLine" size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold">Новая запись</h3>
                </div>
                <Textarea 
                  placeholder="Что сегодня произошло хорошего? О чём думаешь? Какие успехи заметил?"
                  value={currentEntry}
                  onChange={(e) => setCurrentEntry(e.target.value)}
                  className="min-h-32 mb-4 resize-none"
                />
                <Button 
                  onClick={handleSaveEntry}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  <Icon name="Save" size={18} className="mr-2" />
                  Сохранить запись
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {diaryEntries.map((entry, index) => (
                <Card 
                  key={entry.id}
                  className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground font-medium">{entry.date}</span>
                    </div>
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">{entry.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-center pb-8">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Icon name="Sparkles" size={20} className="text-primary" />
            <p>Ты всё делаешь правильно. Продолжай!</p>
            <Icon name="Sparkles" size={20} className="text-primary" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;