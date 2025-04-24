# Модуль "Поиск ментора по фильтрам"

## Назначение

Проверяется, что фильтры поиска наставников работают корректно.

## Среда выполнения

Backend: C#(.NET),
Frontend: React + Typescript + Vite + Tailwind

## Как использовать

1. Открыть страницу поиска наставников.
2. Ввести параметры поиска
   2.1. Можно ввести имя ментора, цену за консультацию, название менторства
   2.2. Можно выбрать рейтинг по звездочкам, язык, позицию, компанию можно выбрать из списка.
3. Нажать «Поиск».

## Реализация со стороны бэка

{
private readonly DatabaseContext \_databaseContext;
public MentorFilterProvider(DatabaseContext databaseContext)
{
\_databaseContext = databaseContext;
}
public IEnumerable<Mentor> CompanyFilters(string company)
{
return \_databaseContext.Mentors.Where<Mentor>(x=>x.WorkingCompany==company);
}

    public IEnumerable<Mentor> LanguageFilter(string language)
    {
        return _databaseContext.Mentors
            .Where(m => m.Languages.Any(l => l.Equals(language.ToLower())));
    }

    public IEnumerable<Mentor> NameFilter(string name)
    {
        return _databaseContext.Mentors.Where<Mentor>(x => x.FullName == name);
    }

    public IEnumerable<Mentor> PositionFilter(string position)
    {
        return _databaseContext.Mentors
            .Where(m => m.Positions.Any(p => p.Equals(position.ToLower())));
    }

    public IEnumerable<Mentor> PriceFilter(decimal price)
    {
        return _databaseContext.Mentors.Where<Mentor>(x => x.Topics.Any(x=>x.Price>price));
    }

    public IEnumerable<Mentor> TopicFilter(IEnumerable<string> topics)
    {
        return _databaseContext.Mentors.Where<Mentor>(x => x.Topics.Any(x => topics.Contains(x.TopicName)));
    }

    public IEnumerable<Mentor> RateFilter(double rate)
    {
        return _databaseContext.Mentors.Where<Mentor>(x => x.Topics.Any(x => x.Rate > rate));
    }

}
