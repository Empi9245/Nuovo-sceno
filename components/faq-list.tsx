import { Reveal } from "@/components/motion/reveal";
import { faqCategories, faqItems } from "@/data/site";

const groups = faqCategories
  .map((category) => ({
    title: category,
    items: faqItems.filter((item) => item.category === category),
  }))
  .filter((group) => group.items.length > 0);

export function FaqList() {
  return (
    <div className="manual-list">
      {groups.map((group, groupIndex) => (
        <section className="manual-group" id={`manual-${groupIndex + 1}`} key={group.title}>
          <div className="manual-group__heading">
            <span>{String(groupIndex + 1).padStart(2, "0")}</span>
            <h2>{group.title}</h2>
          </div>
          <div className="faq-list">
            {group.items.map((item, index) => (
              <Reveal key={item.question} delay={(groupIndex + index) * 0.04}>
                <details>
                  <summary>
                    <span className="faq-list__index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-list__question">{item.question}</span>
                  </summary>
                  <div className="faq-list__answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
