import { DateAdapter } from '@angular/material/core';
import { Moment } from 'moment-hijri';

export class HijiriCustomAdapter extends DateAdapter<Moment> {
  getYear(date: Moment): number {
    throw moment.
  }
  getMonth(date: Moment): number {
    throw new Error('Method not implemented.');
  }
  getDate(date: Moment): number {
    throw new Error('Method not implemented.');
  }
  getDayOfWeek(date: Moment): number {
    throw new Error('Method not implemented.');
  }
  getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
    throw new Error('Method not implemented.');
  }
  getDateNames(): string[] {
    throw new Error('Method not implemented.');
  }
  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    throw new Error('Method not implemented.');
  }
  getYearName(date: Moment): string {
    throw new Error('Method not implemented.');
  }
  getFirstDayOfWeek(): number {
    throw new Error('Method not implemented.');
  }
  getNumDaysInMonth(date: Moment): number {
    throw new Error('Method not implemented.');
  }
  clone(date: Moment): Moment {
    throw new Error('Method not implemented.');
  }
  createDate(year: number, month: number, date: number): Moment {
    throw new Error('Method not implemented.');
  }
  today(): Moment {
    throw new Error('Method not implemented.');
  }
  parse(value: any, parseFormat: any): Moment | null {
    throw new Error('Method not implemented.');
  }
  format(date: Moment, displayFormat: any): string {
    throw new Error('Method not implemented.');
  }
  addCalendarYears(date: Moment, years: number): Moment {
    throw new Error('Method not implemented.');
  }
  addCalendarMonths(date: Moment, months: number): Moment {
    throw new Error('Method not implemented.');
  }
  addCalendarDays(date: Moment, days: number): Moment {
    throw new Error('Method not implemented.');
  }
  toIso8601(date: Moment): string {
    throw new Error('Method not implemented.');
  }
  isDateInstance(obj: any): boolean {
    throw new Error('Method not implemented.');
  }
  isValid(date: Moment): boolean {
    throw new Error('Method not implemented.');
  }
  invalid(): Moment {
    throw new Error('Method not implemented.');
  }
}
