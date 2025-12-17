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
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/5004dc9a-cc38-4716-be8d-5a94e5ff696b/files/f08a5965-da8b-4f43-882f-5f1488688481.jpg',
      title: 'Первое достижение',
      description: 'Помни этот момент — он показал, на что ты способен'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/5004dc9a-cc38-4716-be8d-5a94e5ff696b/files/431218d5-7800-4ea2-aaa9-4146c4e131cf.jpg',
      title: 'Путь к цели',
      description: 'Каждый шаг приближает тебя к мечте'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/5004dc9a-cc38-4716-be8d-5a94e5ff696b/files/30a3c3ef-b3b9-41d0-bb58-01071990f414.jpg',
      title: 'Новые горизонты',
      description: 'Впереди столько возможностей!'
    }
  ];

  const quotes = [
    {
      text: 'Ты сильнее, чем думаешь. Каждый день — это новая возможность доказать это себе.',
      author: 'Из сердца'
    },
    {
      text: 'Помни: падать — это нормально. Главное — каждый раз подниматься.',
      author: 'Твоя поддержка'
    },
    {
      text: 'Твой путь уникален. Не сравнивай себя с другими — сравнивай себя вчерашнего с собой сегодняшним.',
      author: 'Мудрость жизни'
    }
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
              <span className="hidden sm:inline">Моменты</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-2">Твои лучшие моменты</h2>
              <p className="text-muted-foreground">Каждое достижение — это шаг вперёд</p>
            </div>
            <div className="grid gap-6">
              {gallery.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white/90 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-primary text-white">
                      #{item.id}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quotes" className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Слова поддержки</h2>
              <p className="text-muted-foreground">Когда нужна мотивация — вспомни эти слова</p>
            </div>
            <div className="grid gap-6">
              {quotes.map((quote, index) => (
                <Card 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-l-4 border-primary hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <Icon name="Quote" size={32} className="text-primary mb-4 opacity-50" />
                    <p className="text-xl text-foreground mb-4 leading-relaxed font-medium italic">
                      "{quote.text}"
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Heart" size={14} className="text-primary" />
                      {quote.author}
                    </p>
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
