'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Loader2, Send, Upload, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { districts, landStatusOptions, provinces } from '@/lib/data'

const DEFAULT_PROVINCE = 'Kahramanmaraş'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [fileName, setFileName] = useState<string | null>(null)
  const [province, setProvince] = useState(DEFAULT_PROVINCE)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: new FormData(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || 'Talebiniz gönderilemedi. Lütfen tekrar deneyin.')
      }

      setStatus('success')
    } catch (error) {
      setStatus('idle')
      toast.error(error instanceof Error ? error.message : 'Talebiniz gönderilemedi. Lütfen tekrar deneyin.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-md border border-border bg-background p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="font-display text-xl font-bold text-foreground">Talebiniz Alındı</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Proje detaylarınızı inceleyip en kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Yeni Talep Gönder
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-border bg-background p-6 sm:p-8">
      <FieldGroup>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Ad Soyad</FieldLabel>
            <Input id="name" name="name" placeholder="Adınız Soyadınız" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Telefon</FieldLabel>
            <Input id="phone" name="phone" type="tel" placeholder="05xx xxx xx xx" required />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="email">E-posta</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="ornek@eposta.com" required />
        </Field>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="project-type">Proje Tipi</FieldLabel>
            <Select name="project-type" required>
              <SelectTrigger id="project-type" className="w-full">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="cok-katli-konut">Çok Katlı Konut</SelectItem>
                  <SelectItem value="proje-cizimi">Proje Çizimi</SelectItem>
                  <SelectItem value="danismanlik">Danışmanlık</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="land-status">Arsa Durumu</FieldLabel>
            <Select name="land-status" required>
              <SelectTrigger id="land-status" className="w-full">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {landStatusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="province">Arsa Konumu / İl</FieldLabel>
            <Select name="province" value={province} onValueChange={(value) => setProvince(value as string)}>
              <SelectTrigger id="province" className="w-full">
                <SelectValue placeholder="İl Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {provinces.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          {province === DEFAULT_PROVINCE ? (
            <Field>
              <FieldLabel htmlFor="district">Arsa Konumu / İlçe</FieldLabel>
              <Select name="district">
                <SelectTrigger id="district" className="w-full">
                  <SelectValue placeholder="İlçe Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {districts.map((d) => (
                      <SelectItem key={d} value={d.toLowerCase()}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          ) : (
            <Field>
              <FieldLabel htmlFor="district-detail">Arsa Konumu / İlçe</FieldLabel>
              <Input
                id="district-detail"
                name="district-detail"
                placeholder="Ada Parsel İlçe Mahalle Giriniz"
              />
            </Field>
          )}
        </div>

        <Field>
          <FieldLabel htmlFor="message">Proje Detayları</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Projenizle ilgili ihtiyaçlarınızı, m² beklentinizi ve varsa özel notlarınızı paylaşın."
            className="min-h-32"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="file-upload">Eskiz / Arsa Belgesi Yükle</FieldLabel>
          <label
            htmlFor="file-upload"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border bg-card px-4 py-8 text-center transition-colors hover:border-primary/50"
          >
            <Upload className="size-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {fileName ? fileName : 'Dosya seçmek için tıklayın (PDF, JPG, PNG)'}
            </span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>
        </Field>

        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-4 animate-spin" data-icon="inline-start" />
              Gönderiliyor...
            </>
          ) : (
            <>
              <Send className="size-4" data-icon="inline-start" />
              Proje Talebini Gönder
            </>
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
